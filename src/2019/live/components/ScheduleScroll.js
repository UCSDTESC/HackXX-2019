import React, {Component} from 'react';
import styled from 'styled-components';

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
    ROW_MARGIN_TOP,
    LIGHT_BLUE as LIVE_BLUE
} from '../constants';

const ScrollContainer = styled.div`
    width: 100%;
    height: 3rem;
    background: ${CAL_BG};
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};
    display: flex;
    align-items: center;
    justify-content: center;
`

const ScrollBar = styled.div`
    height: 1.5rem;
    width: 95%;
    border: 0px solid rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    position: relative;

    span {
        opacity: 0.5;
    }
`

const Scroller = styled.div`
    border: 2px solid black;
    width: 7rem;
    height: 1.3rem;
    background: #5CCBE2
    font-size: 0.7rem;
    border-radius: 50px;
    position: absolute;
    z-index: 100;
`

class Scroll extends Component {


    render() {
        const {scrollerRef} = this.props;
    
        return (
            <ScrollContainer>
                <ScrollBar className="text-center">
                    <span>
                        🚂 Choo Choo! You have the power to time travel ⏰
                    </span>
                </ScrollBar>
            </ScrollContainer>
        )
    }
}

export default Scroll;