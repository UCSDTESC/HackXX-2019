import React, {Component} from 'react';
import styled from 'styled-components';

import {
    PURPLE
} from '../../constants'

import {withRouter} from 'react-router-dom';
import { mediaBreakpointDown } from '../../../breakpoints';

const NavContainer = styled.nav`
    width: 100%;
    padding-left: 70px;
    padding-right: 55px;

    ${mediaBreakpointDown('md', `
        padding: 15px;
    `)}
`

// HackXX Logo
const NavLogo = styled.img`
    //margin-left: 45px;
    width: 2.7rem;
    ${mediaBreakpointDown('md', `
        width: 1.7rem;
        margin-left: 45px;
    `)}
`

// HackXX 2019
const NavText = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: normal;
    text-align: left;
    margin-left: 1rem;
    vertical-align: middle;
    white-space: nowrap;

    color: #000000;

    ${mediaBreakpointDown('md', `
        display: inline-block;
        font-size: 18px;
    `)}
`

// Live
const NavTextBox = styled.span`
    background: ${PURPLE};
    color: white;
    border-radius: 5px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: normal;
    text-align: left;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 1rem;
    vertical-align: middle;
    white-space: nowrap;

    ${mediaBreakpointDown('md', `
        display: inline-block;
        font-size: 18px;
    `)}
`

// To hold the logo + HackXX 2019 Live
const NavTitle = styled.span`
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;

    ${mediaBreakpointDown('md', `
        display: block;
    `)}
`

// Social media icons
const NavIcon = styled.img`
    display: block;
    margin: auto;
    width: 2rem;
`

class HackXXLiveNav extends Component {

    render() {
        return (
            <NavContainer className="navbar navbar-expand-lg navbar-light bg-light">
                <NavTitle>
                    <NavLogo src="/hackxx_logo.svg"/>
                    <NavText>HackXX 2019</NavText>
                    <NavTextBox>Live</NavTextBox>
                </NavTitle>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.facebook.com/hackXXsd/" target="_blank"> <NavIcon src="/facebook.svg"></NavIcon> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.instagram.com/ucsdtesc/" target="_blank"> <NavIcon src="/instagram.svg"></NavIcon> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/ucsdtesc" target="_blank"> <NavIcon src="/twitter.svg"></NavIcon> </a>
                    </li>
                    </ul>
                </div>
            </NavContainer>
        )
    }
}

export default withRouter(HackXXLiveNav);