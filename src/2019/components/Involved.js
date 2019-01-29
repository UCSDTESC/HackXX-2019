import React, {Component} from 'react';
import styled from 'styled-components';

import {ReactComponent as InvolvedSymbol} from '../svg/symbols/involved.svg';
import {ReactComponent as TealMermaid} from '../svg/mermaids/teal.svg';
import {ReactComponent as Fish} from '../svg/fish.svg';

import {
    Involved as InvolvedConstants
} from '../constants';

import {mediaBreakpointDown} from '../../breakpoints'

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionContent,
    SectionHeader,
    InlineMermaid,
    WhiteButton
} from '../styles';

import { TweenLite, TimelineMax } from 'gsap';

const InvolvedSection = styled(Page)`
    background: ${InvolvedConstants.gradient};
    height: auto;
`

const InvolvedFish = styled(Fish)`
    text-align: right;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: -10%;
    margin-bottom: -10%;
    margin-left: 10%
    position: relative;
    z-index: 0;
`

class Involved extends Component {


    componentDidMount() {
        const {animation} = InvolvedConstants;

        if (animation.play) {
            this.fishAnimation(animation.fish)
        }
    }

    fishAnimation({blue}) {
        new TimelineMax({yoyo: true, repeat: -1})
            .to(blue.selector, 1, {y: -30})
    }

    render() {
        return (
            <InvolvedSection id="involved">
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <InvolvedSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <SeaweedStem className="flex-grow-1">
                        </SeaweedStem>
                    </SeaweedContainer>
                    <SectionContent data-entrance="fade">
                        
                        <div className="container-fluid">
                            {/* Get Involved title and mermaid */}
                            <div className="row">
                                <div className="col-md-8">
                                    <SectionHeader>Get Involved</SectionHeader>
                                </div>
                            </div>

                            {/* Register blurb and button */}
                            <div className="row mt-5 align-items-center">
                                <div className="col-md-6">
                                    If you're a student and you're interested in HackXX, go ahead and
                                </div>
                                <div className="col-md-6">
                                    <WhiteButton className="btn btn-outline-light" href="https://www.tesc.events/register/hackxx" target="_blank">register</WhiteButton>
                                </div>
                            </div>

                            {/* Help out section with three buttons */}
                            <div className="row justify-content-between mt-2">
                                <div className="col-md-6 align-self-end">
                                    If you think HackXX is a great initiative and would like to help out, you can be a
                                </div>
                                <div className="ml-auto">
                                    <InvolvedFish className="w-100 h-100"/>
                                </div>
                            </div>
                            <div className="row align-items-start mb-5 mt-3">
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://tesc.typeform.com/to/wnhOgj" target="_blank">volunteer</WhiteButton>
                                </div>
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://tesc.typeform.com/to/wnhOgj" target="_blank">mentor</WhiteButton>
                                </div>
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="mailto:sponsor@tesc.ucsd.edu" target="_blank">sponsor</WhiteButton>
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