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
    padding: 1.5rem;
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
            <AboutSection id="about">
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
                                HackXX is a women-centric hackathon that provides a collaborative, inclusive space for all to explore technology and apply their talents. Due to the large disparity in gender representation within technological careers, we hope to empower women to join these communities and make a difference. HackXX provides the tools, fellowship, and knowledge to explore technological ideas and passions. All interested in fostering an empathetic and collaborative tech space are welcome! 
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <SectionHeader> Why should I go to HackXX? </SectionHeader>
                            </div>
                            <div className="row">
                                HackXX is for students of all races, genders, and sexualities.
                            </div>

                            <div className="row my-5">
                                <div className="col-md-6" id="pink" data-entrance="fade">
                                    <Mermaid as={PinkMermaid} />
                                    <MermaidCopy>
                                        <p>Meet other women and individuals passionate about tech, and create new ties within the engineering community</p>
                                    </MermaidCopy>
                                </div>
                                <div className="col-md-6" id="blue" data-entrance="fade" data-entrance-delay={DATA_ENTRANCE_DELAY}>
                                    <Mermaid as={BlueMermaid} />
                                    <MermaidCopy>
                                        <p>Resources will be provided for people of all backgrounds and skills, so there will definitely be something to learn</p>
                                    </MermaidCopy>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-md-6" id="purple" data-entrance="fade">
                                    <Mermaid as={PurpleMermaid} />
                                    <MermaidCopy>
                                        <p>Support gender equality in tech!</p>
                                    </MermaidCopy>
                                </div>
                                <div className="col-md-6" id="teal" data-entrance="fade" data-entrance-delay={DATA_ENTRANCE_DELAY}>
                                    <Mermaid as={TealMermaid} />
                                    <MermaidCopy>
                                        <p>Opportunity to network with industry professionals</p>
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