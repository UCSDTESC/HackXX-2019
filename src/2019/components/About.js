import React, {Component} from 'react';
import styled from 'styled-components';

import {ReactComponent as AboutSymbol} from '../svg/symbols/about.svg';

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionHeader,
    SectionContent
} from '../styles';

import {
    About as AboutConstants
} from '../constants';

const AboutSection = styled(Page)`
    background: ${AboutConstants.gradient}
`

class About extends Component {
    render() {
        return (
            <AboutSection>
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <AboutSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <SeaweedStem className="flex-grow-1"></SeaweedStem>
                    </SeaweedContainer>
                    <SectionContent>
                        About Content Here
                    </SectionContent>
                </Container>
            </AboutSection>
        )
    }
}

export default About;