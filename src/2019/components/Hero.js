import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container
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
    max-width: 85%;
`;

const HeroBraces = styled(Braces)`
    max-width: 85%;
`;

class Hero extends Component {
    render() {
        return (
            <HeroSection className="d-flex">
                <Container className="container-fluid align-items-center d-flex" >
                    <div className="row w-100">
                        <div className="col-md-6 align-items-center d-flex justify-content-center">
                            <div className="row">
                                <div className="col-sm-12 w-100">
                                    <HeroImage src="/hackxx2019_logo.gif" className="img-fluid" />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <HeroBraces className="w-100" />
                                            <div className="row w-100">
                                                <div className="col-sm-12 text-center justify-content-center">
                                                    <p>
                                                        April 7 - 8, 2019
                                                        <br />
                                                        PC West Ballroom, UC San Diego
                                                        <br />
                                                    </p>
                                                    <button type="button" className="btn btn-light">REGISTER</button> 
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