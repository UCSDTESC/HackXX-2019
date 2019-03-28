import React, {Component} from 'react';
import styled from 'styled-components';

import {withRouter} from 'react-router-dom';
import {mediaBreakpointDown} from '../../../breakpoints';

const LinkRect = styled.span`
    display: inline-block;
    vertical-align: middle;
    line-height: 120px;
    
    padding-left: 2rem;
    padding-right: 2rem;
 
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 
        rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`

const LinkText = styled.a`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: normal;
    color: #000000;
    font-decoration: none;
    
    ${mediaBreakpointDown('md', `
        padding-right: 1rem;
    `)}
`

const LinkIcon = styled.img`
    padding-right: 1rem;
`

const Divider = styled.img`
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    ${mediaBreakpointDown('md', `
        display: none;
        margin: none;
        padding: none;
        visibility: hidden;
    `)}
`

const LinkGroup = styled.span`
    white-space: nowrap;
    ${mediaBreakpointDown('md', `
        display: block;
    `)}
`

class Links extends Component {

    render() {
        return (
            <LinkRect>
                <LinkGroup><LinkText href="https://hackxx-2019.slack.com" target="_blank"><LinkIcon src="/slack.svg"/>Slack</LinkText></LinkGroup>
                <Divider src="/divider.svg"/>
                <LinkGroup><LinkText href="https://www.devpost.com" target="_blank"><LinkIcon src="/devpost.svg"/>Devpost</LinkText></LinkGroup>
                <Divider src="/divider.svg"/>
                <LinkGroup><LinkText href="https://www.google.com" target="_blank"><LinkIcon src="/tracks.svg"/>Tracks</LinkText></LinkGroup>
                <Divider src="/divider.svg"/>
                <LinkGroup><LinkText href="https://www.google.com" target="_blank"><LinkIcon src="/faq.svg"/>FAQ</LinkText></LinkGroup>
            </LinkRect>
        )
    }

}

export default withRouter(Links);