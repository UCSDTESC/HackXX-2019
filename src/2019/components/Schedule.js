import React, {Component} from 'react';
import styled from 'styled-components';
import {ReactComponent as ScheduleSymbol} from '../svg/symbols/schedule.svg';

import {
    Schedule as ScheduleConstants
} from '../constants';

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionContent
} from '../styles';

const ScheduleSection = styled(Page)`
    background: ${ScheduleConstants.gradient}
`

class Schedule extends Component {
    render() {
        return (
            <ScheduleSection>
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <ScheduleSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <SeaweedStem className="flex-grow-1">
                        </SeaweedStem>
                    </SeaweedContainer>
                    <SectionContent>
                        Schedule Content Here
                    </SectionContent>
                </Container>
            </ScheduleSection>
        )
    }
}

export default Schedule;