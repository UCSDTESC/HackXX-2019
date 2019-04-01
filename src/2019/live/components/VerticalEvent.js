import React, {Component} from 'react';
import styled from 'styled-components';

import {
    HOUR_WIDTH,
    GRADIENT_OFFSET,
    VERTICAL_HOUR_LINE_WIDTH,
    CAL_WIDTH,
    ROW_HEIGHT,
    ROW_MARGIN_TOP,
    LIGHT_BLUE
} from '../constants';

import { PURPLE } from '../../constants';

const Vertical = styled.div`
    width: 3px;
    background: ${PURPLE};
    height: 100%;
    top: 0;
    position: absolute;
    box-shadow: 0px 0px 5px #5CCBE2;
    left: ${props => props.startsAt ? 
        `${(props.startsAt * HOUR_WIDTH) + GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH}px` :
        `${GRADIENT_OFFSET + VERTICAL_HOUR_LINE_WIDTH / 2}px;`
    };
`

const VerticalText = styled.div`
    position:  absolute;
    font-size: 1.5rem;
    color: ${PURPLE};
    white-space: nowrap;
    transform-origin: center;
    transform: translateX(-50%) rotate(90deg) translateY(-1rem) translateX(10rem);
    left: 0;
    font-family: Roboto, sans-serif;
`

class VerticalEvent extends Component {

    render() {

        const {startsAt, event} = this.props;

        return (
            <Vertical startsAt={startsAt}>
                <VerticalText>{event.title}</VerticalText>
            </Vertical>
        )
    }
}

export default VerticalEvent;