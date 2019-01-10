import React, {Component} from 'react';
import styled from 'styled-components';
import {ReactComponent as InvolvedSymbol} from '../svg/symbols/involved.svg';
import {ReactComponent as TealMermaid} from '../svg/mermaids/teal.svg';
import {ReactComponent as Fish} from '../svg/fish.svg';

import {
    Involved as InvolvedConstants
} from '../constants';

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionContent,
    SectionHeader,
    InlineMermaid
} from '../styles';

const InvolvedSection = styled(Page)`
    background: ${InvolvedConstants.gradient}
`

const InvolvedFish = styled(Fish)`
    max-width: 65%;
    text-align: right;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: -10%;
    margin-bottom: -10%;
    margin-left: 10%
    position: relative;
    z-index: 0;
`

const WhiteButton = styled.a`
    border: 4px solid white;
    border-radius: 16px;
    color: white;
    background: transparent;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 0.75rem;
    position: relative;
    z-index: 1;
    font-size: 1.4rem;
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
                        
                        <div className="container-fluid">
                            {/* Get Involved title and mermaid */}
                            <div className="row my-4">
                                <div className="col-md-6">
                                    <SectionHeader>Get Involved</SectionHeader>
                                </div>
                                <div className="col-md-6">
                                    <InlineMermaid as={TealMermaid} />
                                </div>
                            </div>

                            {/* Register blurb and button */}
                            <div className="row my-6 align-items-center">
                                <div className="col-md-6">
                                    If you're a student and you're interested in HackXX, go ahead and
                                </div>
                                <div className="col-md-6">
                                    <WhiteButton className="btn btn-outline-light" href="https://google.com" target="_blank">register</WhiteButton>
                                </div>
                            </div>

                            {/* Help out section with three buttons */}
                            <div className="row justify-content-between">
                                <div className="col-md-6 align-self-end">
                                    If you think HackXX is a great initiative and would like to help out, you can be a
                                </div>
                                <div className="col-md-6 align-self-start">
                                    <InvolvedFish/>
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://google.com" target="_blank">volunteer</WhiteButton>
                                </div>
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://google.com" target="_blank">mentor</WhiteButton>
                                </div>
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://google.com" target="_blank">sponsor</WhiteButton>
                                </div>
                            </div>
                        </div>

                    </SectionContent>
                </Container>            
            </InvolvedSection>
        )
    }
}

export default Involved;