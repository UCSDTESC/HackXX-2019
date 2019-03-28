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
    ROW_HEIGHT,
    LIGHT_BLUE as LIVE_BLUE
} from '../constants';

const Search = styled.div`
    width: 100%;
    border: 0;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    outline: none;
    font-size: 1.5rem;
    padding: 1.8rem 0;
    background: ${LIVE_BLUE};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SearchContents = styled.div`
    width: 75%;
    color: white;
    font-weight: 800;
`

const SearchBox = styled.input`
    border-radius: ${BORDER_RADIUS};
    border: 0;
    width: 50%;
    outline: 0;
    padding: 0 0.5rem;
    font-size: 1.3rem;
`

const Container = styled.div`
    width: 100%;
    background: red;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};
`

const Legend  = styled.div`
    background: ${CAL_BG};
    color: black;
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
    border: 0;
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};

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
    color: black;
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
    color: black;
    opacity: 0.5;
    font-size: 20px;
    width: 100%;
    
    span span {
        display: inline-block;

        width: ${HOUR_WIDTH}px;
    }
`

const Row = styled.div`
    height: ${ROW_HEIGHT * 2}px;
    margin-bottom: 2rem;
`;

const Day = styled.div`
`

class Schedule extends Component {

    constructor() {
        super();

        this.state = {

            // holds the raw data extracted from airtable
            records: [],

            //holds the derived state from the airtable response
            rows: [[]]
        }

        //reference to the Airtable API client
        this.base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
                        .base('appY4r7VAncjUupmp')

        this.eventCategories = ['Main Events', 'Food', 'Workshops', 'Talks']

        this.startTime = moment("2019-04-06T17:00:00.000Z");

    }

    componentDidMount() {
        //getting data from the Schedule table
        this.base('Schedule')
            .select()
            .all()
            .then(records => records.map(r => r._rawJson.fields))
            .then(records => records.map((r) => ({
                ...r, 
                duration: moment(r.endTime).diff(moment(r.startTime), 'hours', true)
            })))
            .then(records => records.sort((a, b) => new Date(a.startTime) - new Date(b.startTime)))
            //using this.setState's callback function to trigger the derived data build when we have records
            .then(records => this.setState({records}, this.createScheduleRows))
    }


    renderTimes(day) {
        const timeMap = {
            'Sat': FRI_HOURS,
            'Sun': SAT_HOURS
        }

        const startTime = {
            'Sat': 10,
            'Sun': 0
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

    //helper function to get the hour index needed for ScheduleEvent's props
    hoursSinceStartTime(date) {
        return moment(date).diff(this.startTime, 'hours', true);
    }

    // method to check if a given event fits in a given row


    //maybe there's a better way to represent a row that makes this operation constant time?
    //1) maybe we can ensure a row is always sorted and binary search? probably not worth
    //2) some kind representation that can give you a 
    //   row[record[startTime]] = (true or false) if it's vacant at that time?
    //   then this function can be `return row.isFree(record[startTime]) && row.isFree(record[endTime])`
    //   you can write a class for this data structure
    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    fits(row, record, rowNum) {
        //console.log(JSON.parse(JSON.stringify(row)))
        for (let i = 0; i < row.length; i++) {
            let currEvt = row[i];
            
            console.log(
                currEvt['endTime'] >= record['endTime'],
                currEvt['startTime'] >= record['startTime'],
                currEvt['startTime'] >= record['endTime'],
                currEvt['endTime'] >= record['startTime']
            )
            if (currEvt['endTime'] >= record['endTime'] || 
                currEvt['startTime'] >= record['startTime'] || 
                currEvt['startTime'] >= record['endTime'] ||
                currEvt['endTime'] >= record['startTime']) {
                return false;
            }
        }
        console.log("fits!", record.title, rowNum)
        return true;
    }

    createScheduleRows() {
        let {records, rows} = this.state;

        //for every record...
        for (let i = 0;  i < records.length; i++) {
            //console.log(JSON.parse(JSON.stringify(rows)));
            //go through all rows...
            for (let rowNum = 0; rowNum < rows.length; rowNum++) {
                console.log('we are in row', rowNum, JSON.parse(JSON.stringify(rows[rowNum])), 'for', records[i].title)
                //if the record fits in the current row
                if (this.fits(rows[rowNum], records[i], rowNum)) {

                    //add it to the row
                    rows[rowNum].push(records[i]);

                    //we're done, go to the next record
                    break;
                }
                else {
                    //we haven't found a row for this record and are at the 
                    //end of all of our current rows, so we create a new row
                    if (rowNum === rows.length - 1) {
                        console.log('creating new row for....', records[i].title)

                        //add a row with the record as it's only event
                        rows.push([records[i]]);

                        //we're done, go to next record
                        break;
                    }
                }
            }
        }

        //set row state, trigger re-render to show rows
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
            <Container className="m-5 w-auto">
                <Search className="d-flex justify-content-center"> 
                    <SearchContents className="d-flex">
                        Timeline
                        <SearchBox className="ml-auto"/>
                    </SearchContents>
                </Search>
                <Legend>
                    {this.eventCategories.map(e => <span>{e}</span>)}
                </Legend>
                <Main>
                <Draggable>
                    <Times>
                        {this.renderTimes('Sat')}
                        {this.renderTimes('Sun')}
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