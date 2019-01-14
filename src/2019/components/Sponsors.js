import React, {Component} from 'react';
import styled from 'styled-components';
import {ReactComponent as SponsorsSymbol} from '../svg/symbols/sponsors.svg';

import {
    Page,
    Container,
    SeaweedContainer,
    SectionContent,
    SectionHeader
} from '../styles';

import {
    Sponsor as SponsorsConstants
} from '../constants';

const SponsorsSection = styled(Page)`
    background: ${SponsorsConstants.gradient}
`

class Sponsors extends Component {
    render() {
        return (
            <SponsorsSection>
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <SponsorsSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <div className="flex-grow-1">
                        </div>
                    </SeaweedContainer>
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row">
                                <SectionHeader>Past Sponsors</SectionHeader>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </SponsorsSection>
        )
    }
}

export default Sponsors;