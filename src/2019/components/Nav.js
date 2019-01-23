import React, {Component} from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';

const NavContainer = styled(Navbar)`
    background: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;

    transition: background 0.2s ease-in;
`

class HackXXNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        let _nav = $("#top-nav");
        const SCROLL_TRESHOLD = 2 * _nav.height();
        let _this = this;
        $(window).scroll(function () {
            if ($(this).scrollTop() > SCROLL_TRESHOLD) { 
                //make nav white when below treshold
                _nav.addClass('bg-white shadow');
            } else {
                //make nav transparent only if the nav is collapsed
                if ($(window).width() > 768 || !_this.state.isOpen) {
                    _nav.removeClass('bg-white shadow');
                }
            }
        });
    }

    toggle() {

        let _nav = $("top-nav");
        const SCROLL_TRESHOLD = 2 * _nav.height();

        if (_nav.scrollTop() < SCROLL_TRESHOLD) {
            if (_nav.hasClass('nav__white')) {
                _nav.removeClass('nav__white')
            }
            else {
                _nav.addClass('nav__white');
            }
        }

        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div>
                <NavContainer expand="md" id="top-nav">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                    </NavContainer>
            </div>
        )
    }
}

export default HackXXNav;