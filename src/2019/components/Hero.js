import React, {Component} from 'react';
import styled from 'styled-components';
import {Bounce, TweenLite, TimelineMax, Power0} from 'gsap';

import {
    Page,
    Container,
    WhiteButton
} from '../styles';

import Nav from './Nav';
import {mediaBreakpointDown} from '../../breakpoints';

import {ReactComponent as HeroGraphicVector} from '../svg/hero.svg';
import {ReactComponent as Logo} from '../svg/logo-white.svg';
import {ReactComponent as Braces} from '../svg/hero-braces.svg';

import {
    Hero as HeroConstants,
    PURPLE
} from '../constants';

const HeroSection = styled(Page)`
    background: ${HeroConstants.gradient};
    min-height: 100%;
    height: auto;
`;

const HeroImage = styled(Logo)`
    width: 42%;

    ${mediaBreakpointDown('md', `

        margin-top: 3rem;
    `)}
`;

const HeroCopy = styled.div`
    font-size: 1.5rem;
    color: white;
`

const HeroBraces = styled(Braces)`
    width: 90%;
    display: block; 
    margin: 0 auto;
`;

const HeroGraphic = styled(HeroGraphicVector)`
    width: 90%;
    
    ${mediaBreakpointDown('md', `
        margin-bottom: 1rem;
    `)}
`

const CTA = styled(WhiteButton)`
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding:  0.5rem 1rem;

    &:hover {
        color: ${PURPLE} !important;
    }
`

class Hero extends Component {


    componentDidMount() {

        const {animation} = HeroConstants;

        if (animation.play) {
            this.heroAnimation(animation);
        }
    }

    heroAnimation({slideIn, fadeIn, tremor, lines}) {
        TweenLite
            .from(slideIn.selector, slideIn.duration, {x: slideIn.fromX, opacity: 0})
        
        TweenLite
            .from(fadeIn.selector, fadeIn.duration, {autoAlpha: 0, delay: slideIn.duration, y: fadeIn.yOffset, ease: Bounce.easeOut});

        new TimelineMax({repeat: -1, yoyo: true, repeatDelay: lines.repeatDelay})
            .staggerFrom(lines.selector, lines.duration, {scaleX: 0, delay: fadeIn.duration, ease: Power0.easeInOut}, 0.1)

        new TimelineMax({repeat: -1, yoyo: true, delay: slideIn.duration + fadeIn.duration})
            .to(tremor.selector, tremor.duration, {y: tremor.yOffset, ease: Power0.easeInOut})
        
    }

    render() {
        return (
                <HeroSection className="align-items-center justify-content-center d-flex pt-5">
                    <div className="align-items-center justify-content-center d-flex w-100" id="hero">
                        <div className="container-fluid align-items-center justify-content-center d-flex mt-5" style={{minHeight:'100%'}} >
                            <Container className="row w-100">
                                <div className="col-md-6 align-items-center d-flex justify-content-center flex-column">
                                    <HeroImage src="/logo.gif" className="img-fluid" />
                                    <HeroBraces />
                                    <HeroCopy className="text-center">
                                        <div>
                                            April 6 - 7, 2019  
                                        </div>

                                        <div>
                                            PC West Ballroom, UC San Diego
                                        </div>
                                        <a href="https://www.tesc.events" target="_blank" className="text-white">
                                            <CTA className="btn btn-outline-light" >
                                                REGISTER
                                            </CTA>                      
                                        </a>
                                    </HeroCopy>
                                </div>
                                <div className="col-md-6 align-items-center d-flex justify-content-center">
                                    <HeroGraphic className=""/>
                                </div>
                            </Container>
                        </div>
                    </div>

                </HeroSection>
        )
    }
}

export default Hero;