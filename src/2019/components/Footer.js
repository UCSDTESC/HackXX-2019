import React, {Component} from 'react';
import styled from 'styled-components';
import {mediaBreakpointDown} from '../../breakpoints';

import {
    LIGHT_BLUE,
    PURPLE,
    Schedule as ScheduleConstants
} from '../constants';

const ContentSection = styled.section`
    text-align: center;
    background: ${ScheduleConstants.gradient};
    height: 18rem;
    position: relative;
    transform: translateY(-2px);

    &:before {
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        background-image: url(/contact-clip.svg);
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
    }
`

const ContactHeader = styled.h1`
    color: white;
    z-index: 2;
    line-height: 1.7;
`

const ContactLink = styled.a`
    color: ${LIGHT_BLUE};

    &:hover {
        color: ${LIGHT_BLUE} !important;
    }
`

const FooterContainer = styled.footer`
    margin: 3rem 0 3rem;
`

const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
`

const FooterLinkItem = styled.li`
    font-size: 1.75rem;
    //width: 80%;
    //margin-left: 10%;

    &:not(:first-child) {
      margin-top: 1rem;

      ${mediaBreakpointDown('md', `
        margin-top: 0;
     `)}
    }

    ${props => props.isLogo && `
    `}
`

const FooterLink = styled.a`
    color: ${PURPLE} !important;

    i {
    }
`
const FooterLogo = styled.img`
    display: block;
    margin: auto;

    width: 50%;

    ${mediaBreakpointDown('md', `
        padding: 1em;
        width: 50%;
     `)}
`

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <ContentSection className="contact" id="contact">
                    <div className="container-fluid d-flex align-items-center h-100">
                        <ContactHeader className="m-auto">
                            Talk to us at <ContactLink className="contact__link" as="a" href="mailto:sponsor@tesc.ucsd.edu">sponsor@tesc.ucsd.edu</ContactLink> if you have any questions.
                        </ContactHeader>
                    </div>
                </ContentSection>
                <FooterContainer className="footer" id="footer">
                    <div className="container-fluid">
                        <FooterLinks className="flex-column ml-md-auto d-flex flex-md-row justify-content-between text-center text-md-left">
                            <FooterLinkItem>
                                <FooterLink target="_new" href="https://www.facebook.com/ucsd.tesc/">
                                <i className="fab fa-facebook-square" />
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLink target="_new" href="https://twitter.com/ucsdtesc">
                                <i className="fab fa-twitter-square" />
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem isLogo={true}>
                                <FooterLink href="http://tesc.ucsd.edu" target="_new">
                                    <FooterLogo src="/tesc-logo.svg"></FooterLogo>
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLink target="_new" href="https://medium.com/triton-engineering-student-council">
                                <i className="fab fa-medium" />
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLink target="_new" href="mailto://hello@tesc.ucsd.edu">
                                <i className="fas fa-envelope-square" />
                                </FooterLink>
                            </FooterLinkItem>
                        </FooterLinks>
                    </div>
                </FooterContainer>
            </div>
        )
    }
}

export default Footer;
