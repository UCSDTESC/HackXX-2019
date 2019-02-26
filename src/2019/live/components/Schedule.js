import React, {Component} from 'react';
import Airtable from 'airtable';
import styled from 'styled-components';
import moment from 'moment';

import ScheduleEvent from './ScheduleEvent';

import {
    BORDER_RADIUS
} from '../../constants';

import {
    FRI_HOURS,
    SAT_HOURS,
    NUM_COLS,
    HOUR_WIDTH,
    CALENDAR_MARGIN,
    CAL_WIDTH,
    CAL_BG,
    GRADIENT_OFFSET,
    VERTICAL_HOUR_LINE_WIDTH 
} from '../constants';

const Search = styled.input`
    width: 100%;
    border: 0;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    outline: none;
    padding: 1rem ${BORDER_RADIUS};

`

const Container = styled.div`
    width: 100%;
    background: red;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
`

const Legend  = styled.div`
    background: black;
    color: white;
    padding: 0.3rem ${BORDER_RADIUS}

    span + span {
        margin-left: 1rem;
    }
`

const Main = styled.div`
    height: 30rem;
    background: ${CAL_BG};
    position: relative;
    overflow-x: auto;

`

const Draggable = styled.div`
    width: ${CAL_WIDTH}px;
    text-align: left !important;
    height: calc(100% - 6rem);
    margin: 0 ${CALENDAR_MARGIN}px;

`

const Calendar = styled.div`
    height: 100%;
    width: ${NUM_COLS * HOUR_WIDTH}px;
    color: white;
    margin-top: 1rem;
    position: relative;
    background: repeating-linear-gradient(
        to right,
        ${CAL_BG},
        ${CAL_BG} ${GRADIENT_OFFSET}px,
        white ${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH }px,
        ${CAL_BG} ${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH }px,
        ${CAL_BG} ${HOUR_WIDTH}px
    );
`

const Times = styled.div`
    color: white;
    font-size: 20px;
    width: 100%;
    
    span span {
        display: inline-block;

        width: ${HOUR_WIDTH}px;
    }
`

class Schedule extends Component {

    constructor() {
        super();

        this.state = {
            records: []
        }

        this.base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
                        .base('appY4r7VAncjUupmp')

        this.eventCategories = ['Main Events', 'Food', 'Workshops', 'Talks']
        this.startTime = moment("2019-04-06T00");

    }

    componentDidMount() {
        this.base('Saturday')
            .select()
            .all()
            .then(records => this.setState({records}))
    }

    renderTimes(day) {
        const timeMap = {
            'Fri': FRI_HOURS,
            'Sat': SAT_HOURS
        }

        const startTime = {
            'Fri': 15,
            'Sat': 0
        }[day]

        let times = []

        for (let i = 0; i < timeMap[day]; i++) {
            times.push(<span>
                {moment.utc((startTime + i)*3600*1000).format('ha')}
            </span>);
        }

        return (
            <span className="d-inline-block">
                <div>
                    {day}
                </div>
                {times}
            </span>
        )
    }

    hoursSinceStartTime(date) {
        return moment(date).diff(this.startTime);
    }

    createScheduleRows() {
        
    }
    
    renderRows = () => {
        
        return (
            <ScheduleEvent 
                duration={4}
                startsAt={8}
            />
        )
    }

    render() {

        if (!this.state.records) {
            return <div>Loading....</div>
        }

        return (
            <Container className="w-100">
                <Search placeholder="Search Here..."/>
                <Legend>
                    {this.eventCategories.map(e => <span>{e}</span>)}
                </Legend>
                <Main>
                <Draggable>
                    <Times>
                        {this.renderTimes('Fri')}
                        {this.renderTimes('Sat')}
                    </Times>
                    <Calendar>
                        {this.renderRows()}
                    </Calendar>
                </Draggable>
                </Main>
            </Container>
        )
    }
}

export default Schedule;