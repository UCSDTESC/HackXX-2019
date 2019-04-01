import React, {Component} from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {
    HOUR_WIDTH,
    GRADIENT_OFFSET,
    VERTICAL_HOUR_LINE_WIDTH,
    CAL_BG,
    ROW_HEIGHT,
    ROW_MARGIN_TOP,
    LIGHT_BLUE
} from '../constants';
import { PURPLE } from '../../constants';

const LineContainer = styled.div`
    width: ${props => props.duration ? 
        `${props.duration * HOUR_WIDTH}px` : 
        `2px`
    };

    position: absolute;
    left: ${props => props.startsAt ? 
        `${(props.startsAt * HOUR_WIDTH) + GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH}px` :
        `${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH / 2}px;`
    };
    color: black;
    font-weight: bolder;
    font-size: 0.8rem;
    font-family: 'Roboto', sans-serif;

`

const Line = styled.div`
    background: ${props => props.color};
    height: 4px;
    width: 100%;
    margin-top: 0.5rem;
    box-shadow: 0px 0px 5px #5CCBE2;
    &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: ${props => props.color};
        position: absolute;
        left: -5px;
        top: 5px;
        border-radius: 50%;
        box-shadow: 0px 0px 5px #5CCBE2;
    }

    &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: ${props => props.color};
        position: absolute;
        right: -5px;
        top: 5px;
        border-radius: 50%; 
        box-shadow: 0px 0px 5px #5CCBE2;    
    }
`

const Title = styled.div`
    text-decoration: underline;
    font-size: 0.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow:hidden;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: ${LIGHT_BLUE}
    }
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
        const {startsAt, event, showPopup, rowIdx, color} = this.props;
        const duration = event.duration;


        if (event.verticalStyle) {
            return <></>
        }

        return (
            <LineContainer
                startsAt={startsAt}
                duration={duration}
            >
                <Line color={color} />
                <Title onClick={() => showPopup({
                    ...event,
                    x: (startsAt * HOUR_WIDTH) + GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH,
                    y: rowIdx * (ROW_HEIGHT + ROW_MARGIN_TOP),
                })}>
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