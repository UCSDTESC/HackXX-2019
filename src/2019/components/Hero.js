import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container
} from '../styles';
import {ReactComponent as HeroGraphic} from '../svg/hero.svg'
import {
    Hero as HeroConstants
} from '../constants';

const HeroSection = styled(Page)`
    background: ${HeroConstants.gradient}
`;

class Hero extends Component {
    render() {
        return (
            <HeroSection className="d-flex">
                <Container className="container-fluid align-items-center d-flex" >
                    <div className="row w-100">
                        <div className="col-md-6">
                            hero content here
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