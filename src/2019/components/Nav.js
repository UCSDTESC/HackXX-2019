import React, {Component} from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import {
    PURPLE
} from '../constants'

import {Link, withRouter} from 'react-router-dom';
import { mediaBreakpointDown } from '../../breakpoints';

const NavContainer = styled.nav`
    background: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1rem 10%;

    transition: background 0.2s ease-in;
`

const NavLink = styled.a`
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${PURPLE};
    text-align: center;
    margin: 0.2rem;
`
const NavLogo = styled.img`
    width: 8rem;
    ${mediaBreakpointDown('md', `
        content: url('/favicon.png');
        width: 2.4rem;
        margin-left: calc(50% - 1.2rem);
    `)}
`

class HackXXNav extends Component {

    constructor(props) {
        super(props);
        this.clickScroll = this.clickScroll.bind(this);
    }

    componentDidMount() {
        let _nav = $("#top-nav");
        const SCROLL_TRESHOLD = 2 * _nav.height();
        $(window).scroll(function () {
            if ($(this).scrollTop() > SCROLL_TRESHOLD) { 
                //make nav white when below treshold
                _nav.addClass('bg-white shadow');
            } else {
                //make nav transparent only if the nav is collapsed
                if ($(window).width() > 768 || $('.navbar-toggler').attr('aria-expanded') === "false") {
                    _nav.removeClass('bg-white shadow');
                }
            }
        });

        $('.navbar-toggler').on('click', (e) => {
            if ($(this).scrollTop() < SCROLL_TRESHOLD) {
                if (_nav.hasClass('nav__white')) {
                    _nav.removeClass('nav__white')
                }
                else {
                    _nav.addClass('nav__white');
                }
            } 
        });
    }

    clickScroll(e) {
        e.preventDefault();
        const {hash} = e.target

        const OFFSET = $('nav').height() + 35

        if (!$(hash).offset()) return;
        if (hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top - OFFSET 
            }, 450);
        }
    }

    render() {
        return (
            <NavContainer className="navbar navbar-expand-lg navbar-light" id="top-nav">
                <NavLogo src="/logo_text.svg"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#about" onClick={this.clickScroll}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#involved" onClick={this.clickScroll}>Get Involved</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#schedule" onClick={this.clickScroll}>Schedule</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#faq" onClick={this.clickScroll}>FAQ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#sponsors" onClick={this.clickScroll}>Sponsors</NavLink>
                        </li>
                    </ul>
                </div>
            </NavContainer>
        )
    }
}

export default withRouter(HackXXNav);