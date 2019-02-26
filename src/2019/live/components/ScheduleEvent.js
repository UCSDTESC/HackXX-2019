import React, {Component} from 'react';
import styled from 'styled-components';

import {
    HOUR_WIDTH,
    GRADIENT_OFFSET,
    VERTICAL_HOUR_LINE_WIDTH,
    CAL_BG
} from '../constants';

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
`

const Line = styled.div`
    background: red;
    height: 4px;
    width: 100%;
    margin-top: 0.5rem;
    &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: red;
        position: absolute;
        left: -5px;
        bottom: -3px;
        border-radius: 50%;
    }

    &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: red;
        position: absolute;
        right: -5px;
        bottom: -3px;
        border-radius: 50%; 
    }
`

class ScheduleEvent extends Component {

    render() {
        const {startsAt, duration, event} = this.props;
        console.log();
        return (
            <LineContainer
                startsAt={startsAt}
                duration={duration}
            >
                {event.get('title')}
                <Line />
            </LineContainer>
        )
    }
}

export default ScheduleEvent;