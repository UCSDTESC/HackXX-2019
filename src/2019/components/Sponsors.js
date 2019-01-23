import React, {Component} from 'react';
import styled from 'styled-components';
import {ReactComponent as SponsorsSymbol} from '../svg/symbols/sponsors.svg';

import {
    Page,
    Container,
    SeaweedContainer,
    SectionContent,
    SectionHeader
} from '../styles';

import {
    Sponsor as SponsorsConstants
} from '../constants';

import {pastSponsors} from '../data/Sponsors.js'

const SponsorsSection = styled(Page)`
    background: ${SponsorsConstants.gradient};
    height: auto;
`

const SponsorContainer = styled.a`
    
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform-origin: center;
        transform: scale(0.9)
    }
`

function Sponsor(props) {
    return (
        <SponsorContainer className="col-md-4 col-lg-4 my-5 d-block" href={props.link}>
            <img src={props.logo} className="img-fluid d-block my-auto"/>
        </SponsorContainer>
    )
}

class Sponsors extends Component {

    renderSponsors() {
        return pastSponsors.map(p => <Sponsor {...p}/>)
    }

    render() {
        return (
            <SponsorsSection>
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <SponsorsSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <div className="flex-grow-1">
                        </div>
                    </SeaweedContainer>
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row">
                                <SectionHeader>Past Sponsors</SectionHeader>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                {this.renderSponsors()}
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </SponsorsSection>
        )
    }
}

export default Sponsors;