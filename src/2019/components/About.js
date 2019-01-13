import React, {Component} from 'react';
import styled from 'styled-components';

import {ReactComponent as AboutSymbol} from '../svg/symbols/about.svg';

import {ReactComponent as PinkMermaid} from '../svg/mermaids/pink.svg';
import {ReactComponent as BlueMermaid} from '../svg/mermaids/blue.svg';
import {ReactComponent as PurpleMermaid} from '../svg/mermaids/purple.svg';
import {ReactComponent as TealMermaid} from '../svg/mermaids/teal.svg';

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionHeader,
    SectionContent,
} from '../styles';

import {
    About as AboutConstants
} from '../constants';

import {mediaBreakpointDown} from '../../breakpoints';

const AboutSection = styled(Page)`
    background: ${AboutConstants.gradient};
    height: auto;
`

const AboutHeader = styled(SectionHeader)`
    margin-top: 12rem;

    ${mediaBreakpointDown('sm', `
        margin-top: 2rem;
        text-align: center;
        width: 100%;
    `)}
`

const MermaidCopy = styled.div`
    margin-top: 2rem;
`

const Mermaid = styled.div`
    height: 15rem;
    display: block;
    margin: auto;
    width: 100%;

    ${mediaBreakpointDown('md', `
        width: 75%;
    `)}

    ${mediaBreakpointDown('sm', `
        height: 10rem;
        margin-bottom: 2rem;
    `)}
`

const OffsetSeaweedStem = styled(SeaweedStem)`
    height: 9.8rem;
`

class About extends Component {
    render() {

        const {DATA_ENTRANCE_DELAY} = AboutConstants;

        return (
            <AboutSection>
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <OffsetSeaweedStem></OffsetSeaweedStem>
                        <AboutSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <SeaweedStem className="flex-grow-1"></SeaweedStem>
                    </SeaweedContainer>
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row">
                                <AboutHeader> What's HackXX? </AboutHeader>
                            </div>
                            <div className="row my-4">
                                HackXX is UC San Diego's annual women and nonbinary-centric hackathon. It’s an empowering place to build great projects. Over 24 hours, participants will be given the tools and knowledge to materialize their technological dreams.
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <SectionHeader> Why should I go to HackXX? </SectionHeader>
                            </div>
                            <div className="row">
                                HackXX is for students of all races, gender, and sexuality.
                            </div>

                            <div className="row my-5">
                                <div className="col-md-6" id="pink" data-entrance="fade">
                                    <Mermaid as={PinkMermaid} />
                                    <MermaidCopy>
                                        <p>All majors are welcome to explore their ideas and passions! Wander through countless fields of interest through our workshops on x, y, and z. </p>
                                    </MermaidCopy>
                                </div>
                                <div className="col-md-6" id="blue" data-entrance="fade" data-entrance-delay={DATA_ENTRANCE_DELAY}>
                                    <Mermaid as={BlueMermaid} />
                                    <MermaidCopy>
                                        <p>Form strong bonds by engaging with other women in tech and interacting with the engineering community.</p>
                                    </MermaidCopy>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-md-6" id="purple" data-entrance="fade" data-entrance-delay={2*DATA_ENTRANCE_DELAY}>
                                    <Mermaid as={PurpleMermaid} />
                                    <MermaidCopy>
                                        <p>Don’t know how to do something? We have a supportive group of mentors who can walk you through it and provide you with resources!</p>
                                    </MermaidCopy>
                                </div>
                                <div className="col-md-6" id="teal" data-entrance="fade" data-entrance-delay={3*DATA_ENTRANCE_DELAY}>
                                    <Mermaid as={TealMermaid} />
                                    <MermaidCopy>
                                        <p>Don’t know how to do something? We have a supportive group of mentors who can walk you through it and provide you with resources!</p>
                                    </MermaidCopy>
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </AboutSection>
        )
    }
}

export default About;