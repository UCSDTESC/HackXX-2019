import React, {Component} from 'react';
import styled from 'styled-components';
import {ReactComponent as InvolvedSymbol} from '../svg/symbols/involved.svg';

import {
    Involved as InvolvedConstants
} from '../constants';

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionContent
} from '../styles';

const InvolvedSection = styled(Page)`
    background: ${InvolvedConstants.gradient}
`

class Involved extends Component {
    render() {
        return (
            <InvolvedSection>
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <InvolvedSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <SeaweedStem className="flex-grow-1">
                        </SeaweedStem>
                    </SeaweedContainer>
                    <SectionContent>
                        Schedule Content Here
                    </SectionContent>
                </Container>            
            </InvolvedSection>
        )
    }
}

export default Involved;