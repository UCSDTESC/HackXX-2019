import React, {Component} from 'react';
import styled from 'styled-components';

import {withRouter} from 'react-router-dom';
import {mediaBreakpointDown} from '../../../breakpoints';

const LinkRect = styled.span`
    display: inline-block;
    vertical-align: middle;
    padding: 1rem;
 
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 
        rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    ${mediaBreakpointDown('lg-xl', `
        display: block;
        padding: none;
        margin-left: 40px;
        margin-right: 40px;
    `)}
`

const LinkText = styled.a`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: normal;
    color: #000000;
    font-decoration: none;
    border: none;
    padding-right: 1rem;
    
    ${mediaBreakpointDown('lg-xl', `
        padding: none;
        margin: none;
        font-size: 20px;
    `)}
`

const LinkIcon = styled.img`
    padding-right: 1rem;
    width: 60px;

    ${mediaBreakpointDown('lg-xl', `
        margin: none;
        padding: none;
    `)}
`

const Divider = styled.img`

    ${mediaBreakpointDown('lg-xl', `
        content: url('/horizontal-divider.svg');
        margin: none;
        padding: none;
    `)}
`

const LinkGroup = styled.span`
    white-space: nowrap;
    ${mediaBreakpointDown('lg-xl', `
        display: block;
        padding-top, padding-bottom: 0;
        margin-top, margin-bottom: 0;
    `)}
`

class Links extends Component {

    render() {
        return (
            <LinkRect>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://hackxx-2019.slack.com" target="_blank"><LinkIcon src="/slack.svg"/>Slack</LinkText></LinkGroup>
                <Divider src="/divider.svg"/>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://www.devpost.com" target="_blank"><LinkIcon src="/devpost.svg"/>Devpost</LinkText></LinkGroup>
                <Divider src="/divider.svg"/>
                <LinkGroup><LinkText className="btn btn-outline-light" href="/tracks.pdf" target="_blank"><LinkIcon src="/tracks.svg"/>Tracks</LinkText></LinkGroup>
                <Divider src="/divider.svg"/>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://hackmd.io/s/SkHjBXsu4" target="_blank"><LinkIcon src="/faq.svg"/>FAQ</LinkText></LinkGroup>
            </LinkRect>
        )
    }

}

export default withRouter(Links);