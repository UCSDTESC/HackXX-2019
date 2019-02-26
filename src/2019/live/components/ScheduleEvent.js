import React, {Component} from 'react';
import styled from 'styled-components';

import {
    HOUR_WIDTH,
    GRADIENT_OFFSET,
    VERTICAL_HOUR_LINE_WIDTH 
} from '../constants';

const Line = styled.div`
    background: red;
    position: absolute;
    height: 4px;
    width: ${props => props.duration ? 
        `${props.duration * HOUR_WIDTH}px` : 
        `${HOUR_WIDTH}px`
    };
    
    left: ${props => props.startsAt ? 
        `${(props.startsAt * HOUR_WIDTH) + GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH / 2}px` :
        `${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH / 2}px;`
    };

    &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: red;
        position: absolute;
        left: -5px;
        top: -3px;
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
        top: -3px;
        border-radius: 50%; 
    }
`

class ScheduleEvent extends Component {

    render() {
        const {startsAt, duration} = this.props;

        return <Line 
            startsAt={startsAt}
            duration={duration}
        />
    }
}

export default ScheduleEvent;