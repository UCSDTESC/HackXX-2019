import React, {Component} from 'react';
import styled from 'styled-components';
import {Bounce, TweenLite, TimelineMax, Power0} from 'gsap';

import {
    Page,
    Container
} from '../styles';

import {ReactComponent as HeroGraphic} from '../svg/hero.svg';

import {
    Hero as HeroConstants
} from '../constants';

const HeroSection = styled(Page)`
    background: ${HeroConstants.gradient}
`;

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
            <HeroSection className="d-flex">
                <Container className="container-fluid align-items-center d-flex" >
                    <div className="row w-100">
                        <div className="col-md-6 align-items-center d-flex justify-content-center">
                            hero content here
                        </div>
                        <div className="col-md-6">
                            <HeroGraphic className="w-100 h-100"/>
                        </div>
                    </div>
                </Container>
            </HeroSection>
        )
    }
}

export default Hero;