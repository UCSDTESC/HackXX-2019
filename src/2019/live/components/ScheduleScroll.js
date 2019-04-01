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
    height: 1rem;
    width: 95%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    position: relative;
`

const Scroller = styled.div`
    border: 2px solid black;
    width: 15%;
    height: 0.8rem;
    background: #5CCBE2
    border-radius: 50px;
    position: absolute;
`

class Scroll extends Component {


    render() {
        const {scrollerRef} = this.props;
    
        return (
            <ScrollContainer>
                <ScrollBar>
                    <Scroller ref={scrollerRef}/>
                </ScrollBar>
            </ScrollContainer>
        )
    }
}

export default Scroll;