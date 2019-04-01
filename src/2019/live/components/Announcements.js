import React, { Component } from 'react';
import Airtable from 'airtable';
import styled from 'styled-components';
import {ReactComponent as AnnouncementVectorGraphic} from '../svg/announcement.svg';

import AnnouncementBubble from './AnnouncementBubble';

import {
    BORDER_RADIUS
} from '../constants';

const Container = styled.div`
    width: 100%;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};
`

// change background color to use constant
const AnnouncementTitle = styled.div`
    background: #8E44AD;
    color: white;
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    font-size: 1.5rem;
`

const AnnouncementIcon = styled(AnnouncementVectorGraphic)`
    fill: white;
`

const AnnouncementContainer = styled.div`
    padding-top: 1rem;
    background: #CEFFE8;
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};
    overflow-y: scroll;
    height: 100%;
    display: flex;
    justify-content: center;
`

const Timestamp = styled.p`
    font-size: 0.85rem;
    padding-left: 1rem;
    padding-top: 0.2rem;
`

class Announcements extends Component {

    constructor() {
        super();

        this.state = {

            // holds the raw data extracted from airtable
            records: []
        
        }

        //reference to the Airtable API client
        this.base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
            .base('appY4r7VAncjUupmp')


        // this.announcementFields = ['title', 'organizer']
    }

    componentDidMount() {
        this.base('Announcements')
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

    formatTimestamp(timestamp) {
        // 2019-03-13T02:39:57.000Z
        let formatted = '';
        
        // splits the timestamp into date and time
        const splitTimestamp = timestamp.split('T');
        const splitDate = splitTimestamp[0].split('-');
        const splitTime = splitTimestamp[1].split(':');

        let hour = parseInt(splitTime[0], 10);
        hour -= 7;
        
        // check to see if we need to subtract a day
        // doesn't account for beginning of the month -- need to fix
        if(hour < 0) {
            splitDate[2] = (parseInt(splitDate[2], 10) - 1).toString();
            hour += 24;
        }
        
        let timeOfDay = 'AM';
        if(hour >= 12) {
            hour -= 12;
            timeOfDay = 'PM';
        } else if(hour == 0) {
            hour = 12;
        }

        splitTime[0] = hour.toString();

        formatted += `${splitDate[1]}/${splitDate[2]}/${splitDate[0]} \u2022 `;
        formatted += `${splitTime[0]}:${splitTime[1]} ${timeOfDay}`

        return formatted;
    }

    renderAnnouncements() {

        // push all announcements into this list
        let announcementList = []
        let time = ''

        this.state.records.forEach(record => {

            time = this.formatTimestamp(record.get('timestamp'));

            // assemble the required fields and push into the list
            announcementList.push(
                <span className='w-100'>
                    <AnnouncementBubble
                        description={record.get('description')}
                    />
                    <Timestamp>{time}</Timestamp>
                </span>
            )
        });

        return (
            <span className='w-75'>
                {announcementList}
            </span>
        )
    }

    render() {
        return (
            <Container className="m-5 w-auto">
                <AnnouncementTitle className="text-center">
                    <AnnouncementIcon /> Announcements
                </AnnouncementTitle>

                <AnnouncementContainer>
                    {this.renderAnnouncements()}
                </AnnouncementContainer>
            </Container>
        )
    }
}

export default Announcements;