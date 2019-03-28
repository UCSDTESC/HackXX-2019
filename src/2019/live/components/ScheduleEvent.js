import React, {Component} from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {
    HOUR_WIDTH,
    GRADIENT_OFFSET,
    VERTICAL_HOUR_LINE_WIDTH,
    CAL_BG
} from '../constants';
import { PURPLE } from '../../constants';
import { EventEmitter } from 'events';

const LineContainer = styled.div`
    width: ${props => props.duration ? 
        `${props.duration * HOUR_WIDTH}px` : 
        `0px`
    };
    position: absolute;
    left: ${props => props.startsAt ? 
        `${(props.startsAt * HOUR_WIDTH) + GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH}px` :
        `${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH / 2}px;`
    };
    color: black;
    font-weight: bolder;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

`

const Line = styled.div`
    background: ${PURPLE};
    height: 4px;
    width: 100%;
    margin-top: 0.5rem;
    box-shadow: 0px 0px 5px #5CCBE2;
    &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: ${PURPLE};
        position: absolute;
        left: -5px;
        top: 5px;
        border-radius: 50%;
    }

    &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: ${PURPLE};
        position: absolute;
        right: -5px;
        top: 5px;
        border-radius: 50%; 
    }
`

const Title = styled.div`
    text-decoration: underline;
    font-size: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow:hidden;
    font-weight: bold;
`

const Time = styled.div`
    color: ${PURPLE};
    font-weight: bold;
`

const Location = styled.div`
    color: ${PURPLE};
`

class ScheduleEvent extends Component {

    render() {
        const {startsAt, event} = this.props;
        const duration = event.duration;
        return (
            <LineContainer
                startsAt={startsAt}
                duration={duration}
            >
                <Line />
                <Title>
                    {event.title}
                </Title>
                <Time>
                    {moment(event.startTime).format('h:mma')} - {moment(event.endTime).format('h:mma')}
                </Time>
                <Location>
                    {event.location}
                </Location>
            </LineContainer>
        )
    }
}

export default ScheduleEvent;