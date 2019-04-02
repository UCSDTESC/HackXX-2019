import React, {Component} from 'react';
import Airtable from 'airtable';
import styled from 'styled-components';

import {ReactComponent as ScheduleSymbol} from '../svg/symbols/schedule.svg';
import {ReactComponent as School} from '../svg/school.svg';

import {
    Schedule as ScheduleConstants
} from '../constants';

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionContent,
    SectionHeader,
    SectionSubHeader
} from '../styles';

const ScheduleSection = styled(Page)`
    background: ${ScheduleConstants.gradient};
`

const ScheduleTimes = styled.div`
    padding-right: 3rem;
    color: white;
`

const EventContainer = styled.div`
    padding-bottom: 1rem;
`

const SchoolOfFish = styled(School)`
    width: 35%;
    min-width: 17rem;
`

const PaddedRow = styled.div`
    margin: 3rem 0;
`

const PaddedDay = styled.div`
    margin: 1rem 0;
`


class Schedule extends Component {
    constructor() {
        super();

        this.state = {
            records: []
        }

        this.base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
            .base('appY4r7VAncjUupmp')
    }


    componentDidMount() {
        if (!this.props.data) {
            this.base('Static Schedule')
                .select({
                    // Selecting records in Grid view:
                    view: "Grid view"
                })
                .eachPage((records, fetchNextPage) => {
                    // This function (`page`) will get called for each page of records.

                    this.setState({
                        records: [
                            ...this.state.records,
                            ...records
                        ]
                    })

                    // To fetch the next page of records, call `fetchNextPage`.
                    fetchNextPage();

                }, err => {
                    if (err) { console.error(err); return; }
                });
        }
    }

    isSaturday(timestamp) {
        // ex. timestamp: 2019-03-13T02:39:57.000Z
        const splitTimestamp = timestamp.split('T');
        let day = parseInt(splitTimestamp[0].split('-')[2]);
        const hour = parseInt(splitTimestamp[1].split(':')[0], 10) - 7;

        if(hour < 0) {
            day -= 1;
        }

        return day === 6;
    }

    formatTimestamp(timestamp) {
        // 2019-03-13T02:39:57.000Z
        let formatted = '';
        
        // splits the timestamp into date and time
        const splitTimestamp = timestamp.split('T');
        const splitTime = splitTimestamp[1].split(':');

        let hour = parseInt(splitTime[0], 10);
        hour -= 7;
        
        // check to see if we need to subtract a day
        // doesn't account for beginning of the month -- need to fix
        if(hour < 0) {
            hour += 24;
        }
        
        let timeOfDay = 'AM';
        if(hour >= 12) {
            hour -= 12;
            timeOfDay = 'PM';
        }
        
        if(hour == 0) {
            hour = 12;
        }

        splitTime[0] = hour.toString();

        formatted = `${splitTime[0]}:${splitTime[1]} ${timeOfDay}`

        return formatted;
    }
    
    renderStaticSchedule(day, data) {
        // day = 0; saturday
        // day = 1; sunday

        // push all announcements into this list
        let eventSchedule = []
        let formattedStartTime = ''
        let formattedEndTime = '';

        data.forEach(record => {
            if (record._rawJson) record = record._rawJson.fields;

            const startTime = record['startTime'];
            const title = record['title'];

            if(day === 0) {
                // make sure startTime is saturday
                if(!this.isSaturday(startTime)) {
                    return;
                }
            } else {
                // make sure startTime is not saturday
                if(this.isSaturday(startTime)) {
                    return;
                }
            }

            formattedStartTime = this.formatTimestamp(startTime);
            formattedEndTime = record['endTime'];
            
            if(formattedEndTime) {
                formattedEndTime = this.formatTimestamp(formattedEndTime);
                
                // assemble the required fields and push into the list
                eventSchedule.push(
                    <EventContainer className="w-100 d-flex d-inline-block">
                        <ScheduleTimes className="w-50 text-right">
                            <div>{formattedStartTime}</div>
                            <div>to {formattedEndTime}</div>
                        </ScheduleTimes>
                        <div className="w-50 text-left text-white">
                            <div>{title}</div>
                        </div>
                    </EventContainer>
                )
            } else {
                eventSchedule.push(
                    <EventContainer className="w-100 d-flex d-inline-block">
                        <ScheduleTimes className="w-50 text-right">
                            <div>{formattedStartTime}</div>
                        </ScheduleTimes>
                        <div className="w-50 text-left text-white">
                            <div>{title}</div>
                        </div>
                    </EventContainer>
                )
            }

        });

        return (
            <PaddedDay>
                {eventSchedule}
            </PaddedDay>
        )

    }

    render() {


        if (this.props.data) {
            return  (
                <div className="container">
                    <PaddedRow className="row justify-content-center">
                        <div className="col col-md-6">
                            <SectionSubHeader className="text-center">Saturday, April 6th</SectionSubHeader>
                            {this.renderStaticSchedule(0, this.props.data)}
                        </div>
                        <div className="col col-md-6">
                            <SectionSubHeader className="text-center">Sunday, April 7th</SectionSubHeader>
                            {this.renderStaticSchedule(1, this.props.data)}
                        </div>
                    </PaddedRow>
                </div>

            )
        }

        return (
            <ScheduleSection id="schedule">
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <ScheduleSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <SeaweedStem className="flex-grow-1">
                        </SeaweedStem>
                    </SeaweedContainer>
                    <SectionContent data-entrance="fade">
                        <div className="container-fluid h-75">
                            <div className="row">
                                <SectionHeader>Schedule</SectionHeader>
                            </div>
                            <PaddedRow className="row justify-content-center">
                                <div className="col col-md-6">
                                    <SectionSubHeader className="text-center">Saturday, April 6th</SectionSubHeader>
                                    {this.renderStaticSchedule(0, this.state.records)}
                                </div>
                                <div className="col col-md-6">
                                    <SectionSubHeader className="text-center">Sunday, April 7th</SectionSubHeader>
                                    {this.renderStaticSchedule(1, this.state.records)}
                                </div>
                            </PaddedRow>
                            <SchoolOfFish className="ml-auto d-block"/>
                        </div>
                    </SectionContent>
                </Container>
            </ScheduleSection>
        )
    }
}

export default Schedule;