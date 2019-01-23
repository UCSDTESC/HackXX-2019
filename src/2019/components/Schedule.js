import React, {Component} from 'react';
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
    SectionHeader
} from '../styles';

const ScheduleSection = styled(Page)`
    background: ${ScheduleConstants.gradient};
`

const SchoolOfFish = styled(School)`
    width: 35%;
    min-width: 17rem;
`

const PaddedRow = styled.div`
    margin: 7rem 0;
`

class Schedule extends Component {
    render() {
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
                                <h3>Coming Soon, Stay Tuned For More!</h3>
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