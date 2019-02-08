import React, {Component} from 'react';
import styled from 'styled-components';
import {Bounce, TweenLite, TimelineMax, Power0, TimelineLite, TweenMax} from 'gsap';

import {ReactComponent as FaqSymbol} from '../svg/symbols/faq.svg';
import {ReactComponent as BlueMermaid} from '../svg/mermaids/blue.svg';
import {ReactComponent as FaqFooter} from '../svg/faq-footer.svg';

import Question from './Question';
import faqData from '../data/Faq';

import {
    Page,
    Container,
    SeaweedContainer,
    SeaweedStem,
    SectionHeader,
    SectionContent,
    InlineMermaid
} from '../styles';

import {
    LIGHT_BLUE,
    Faq as FaqConstants, Faq,
} from '../constants';

const FaqSection = styled(Page)`
    background: ${FaqConstants.gradient};
    height: auto;
`
const FaqContactLink = styled.a`
    color: ${LIGHT_BLUE} !important;
`

class FAQ extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {animation} = FaqConstants;
        if (animation.play) {
            this.fishAnimation(animation.fish);
        }
    }

    fishAnimation({red, blue, bubbles}) {
        let x = 0;
        let tl = new TimelineMax({repeat: -1, yoyo: true,
            onRepeat: () => {
                let scaleX = (x % 2) ? '1' : '-1'
                TweenLite.set(red.selector, {scaleX, transformOrigin: '50%'});
                x++;
            }
        })

        tl.to(red.selector, red.duration, {
            x: red.x,
            ease: Power0.easeInOut
        })

        new TimelineMax({repeat: -1, yoyo: true,})
            .to(red.selector, red.duration / 5, {
                y: 3,
                rotateY: 4,
                ease: Power0.easeInOut
            })

        new TimelineMax({repeat: -1, yoyo: true})
            .to(blue.selector, 0.8, {y: 5, ease: Power0.easeInOut, rotateY: 2});

        const bubbleElements = document.querySelectorAll(bubbles.selector);

        bubbleElements.forEach(x => {
            new TimelineMax({repeat: -1, yoyo: true}).fromTo(x, 1, {y: -2 * Math.random()}, {y: 2 * Math.random()})
        })
    }

    render() {
        return (
            <FaqSection id="faq">
                <Container className="d-flex mx-auto">
                    <SeaweedContainer className="flex-column">
                        <FaqSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <SeaweedStem className="flex-grow-1">
                        </SeaweedStem>
                    </SeaweedContainer>
                    <SectionContent data-entrance="fade">
                        <div className="container-fluid">
                            <div className="row">
                                <SectionHeader>
                                    Frequently Asked Questions
                                </SectionHeader>
                                <div className="ml-auto">
                                    <InlineMermaid as={BlueMermaid} />
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col d-block px-0">
                                    <div className="content">
                                        {faqData.map((d, i) => <Question 
                                            {...d} 
                                            key={i} 
                                            idx={i}
                                            isLast={i === faqData.length - 1}
                                            isFirst = {i === 0}
                                        />)}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-white w-100">
                                Got any other questions? Email us at <FaqContactLink as="a" href="mailto:hello@sdhacks.io"> {' '} hello@sdhacks.io! </FaqContactLink>(Yep, we're affiliated with SD Hacks)
                            </div>
                            <FaqFooter className="w-100"/>
                        </div>
                    </SectionContent>
                </Container>            
            </FaqSection>
        )
    }
}

export default FAQ;
