import React, {Component} from 'react';
import Airtable from 'airtable';
import styled from 'styled-components';
import moment from 'moment';

import ScheduleEvent from './ScheduleEvent';

import {
    BORDER_RADIUS, LIGHT_BLUE
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
    VERTICAL_HOUR_LINE_WIDTH,
    ROW_HEIGHT
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
    //height: 30rem;
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
    display: block;
    margin-top: 1rem;
    position: relative;
    background: repeating-linear-gradient(
        to right,
        ${CAL_BG},
        ${CAL_BG} ${GRADIENT_OFFSET}px,
        ${LIGHT_BLUE} ${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH}px,
        ${CAL_BG} ${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH}px,
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

const Row = styled.div`
    height: ${ROW_HEIGHT}px
`;

const Day = styled.div`
`

class Schedule extends Component {

    constructor() {
        super();

        this.state = {
            records: [],
            rows: [[]]
        }

        this.base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
                        .base('appY4r7VAncjUupmp')

        this.eventCategories = ['Main Events', 'Food', 'Workshops', 'Talks']
        this.startTime = moment("2019-04-06T17:00:00.000Z");

    }

    componentDidMount() {
        this.base('Schedule')
            .select()
            .all()
            .then(records => records.map(r => r._rawJson.fields))
            .then(records => records.map((r) => ({
                ...r, 
                duration: moment(r.endTime).diff(moment(r.startTime), 'hours', true)
            })))
            .then(records => this.setState({records}, this.createScheduleRows))
    }

    renderTimes(day) {
        const timeMap = {
            'Fri': FRI_HOURS,
            'Sat': SAT_HOURS
        }

        const startTime = {
            'Fri': 10,
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
                <Day>
                    {day}
                </Day>
                {times}
            </span>
        )
    }

    hoursSinceStartTime(date) {
        return moment(date).diff(this.startTime, 'hours', true);
    }

    fits(row, record) {
        for (let i = 0; i < row.length; i++) {
            let currEvt = row[i];
            if (currEvt['endTime'] >= record['endTime'] || currEvt['startTime'] >= record['startTime']) {
                //console.log(currEvt, record)
                return false;
            }
        }
        return true;
    }

    createScheduleRows() {
        //TODO: Fix big where event to be added needs to be added to newly pushed row
        let {records, rows} = this.state;
        for (let i = 0;  i < records.length; i++) {
            for (let rowNum = 0; rowNum < rows.length; rowNum++) {
                console.log(records[i].title, rowNum);
                if (this.fits(rows[rowNum], records[i])) {
                    rows[rowNum].push(records[i]);
                    break;
                }
                else {
                    if (rowNum === rows.length - 1) {
                        console.log('creating new..', records[i].title)
                        rows.push([records[i]]);
                        break;
                    }
                }
            }
        }
        this.setState({rows})
    }
    
    renderRows = () => {
        const {records, rows} = this.state;
        
        return rows.map((row, rowIdx) => {
            return (
                <Row className="mb-3">
                    {row.map(r => <ScheduleEvent
                            startsAt={this.hoursSinceStartTime(r['startTime'])}
                            event={r}
                        />)}
                </Row>
            )
        })
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