import React, {Component} from 'react';
import styled from 'styled-components';

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
    Faq as FaqConstants,
} from '../constants';

const FaqSection = styled(Page)`
    background: ${FaqConstants.gradient};
    height: auto;
`
class FAQ extends Component {
    render() {
        return (
            <FaqSection>
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
                                Got any other questions? Email us at <a href="mailto:hello@sdhacks.io"> {' '} hello@sdhacks.io</a>! (Yep, we're affiliated with SD Hacks)
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