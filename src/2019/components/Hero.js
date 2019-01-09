import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionContent
} from '../styles';
import {ReactComponent as HeroGraphic} from '../svg/hero.svg'
import {ReactComponent as Braces} from '../svg/hero-braces.svg'
import {
    Hero as HeroConstants
} from '../constants';

const HeroSection = styled(Page)`
    background: ${HeroConstants.gradient}
`;

const HeroImage = styled.img`
    max-width: ${HeroConstants.width}
    max-height: 50%;
    position: relative;
    height: auto;
    padding-left: 1.5rem;
`;

const HeroBraces = styled(Braces)`
    max-width: ${HeroConstants.width}
    max-height: 50%;
    position: relative;
    height: auto;
`;

const HeroButton = styled.button`
    color: white;
    background-color: transparent;
    border-radius: 1.2rem;
    border: 2px solid white;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.8rem;
    margin-top: 1rem;
    max-width: 100%;

    &:hover {
        color: black;
        background-color: white;
    }
`;

class Hero extends Component {
    render() {
        return (
            <HeroSection className="d-flex">
                <Container className="container-fluid align-items-center d-flex h-100" >
                    <div className="row w-100">
                        <div className="col-md-6 align-items-center d-flex justify-content-center">
                            <div className="row">
                                <div className="col-sm-12 align-items-center">
                                    <HeroImage src="/hackxx2019_logo.gif" className="img-fluid" />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <HeroBraces className="w-100" />
                                            <div className="row w-100">
                                                <div className="col-sm-11 text-center mr-3">
                                                    <SectionContent>
                                                        April 7 - 8, 2019
                                                        <br />
                                                        PC West Ballroom, UC San Diego
                                                    </SectionContent>
                                                    <HeroButton className="btn btn-outline-light">REGISTER</HeroButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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