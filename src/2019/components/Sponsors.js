import React, {Component} from 'react';
import styled from 'styled-components';
import {ReactComponent as SponsorsSymbol} from '../svg/symbols/sponsors.svg';

import {
    Page,
    Container,
    SeaweedContainer,
    SectionContent,
    SectionHeader,
    SeaweedStem
} from '../styles';

import {
    Sponsor as SponsorsConstants
} from '../constants';

import {pastSponsors, sponsors, partners} from '../data/Sponsors.js'

const SponsorsSection = styled(Page)`
    background: ${SponsorsConstants.gradient};
    height: auto;
    transform: translateY(-1px)
`

const SponsorContainer = styled.a`
    
    transition: all 0.3s ease-in-out;
    &:hover {
        transform-origin: center;
        transform: scale(0.9)
    }
`

function Sponsor(props) {
    const col = props.col || 'col-md-4 col-lg-4';
    console.log(props);
    return (
        <SponsorContainer className={`${col} my-5 d-block`} href={props.link} target="_blank">
            <img src={props.logo} className={`img-fluid d-block m-auto  ${props.className}`}/>
        </SponsorContainer>
    )
}

class Sponsors extends Component {
    renderSponsors(currSponsors) {
        const COL_LENS = ['col-md-9 col-lg-9', 'col-md-4 col-lg-4', 'col-md-3 col-md-3'];
        return currSponsors.map(p => <Sponsor {...p} col={COL_LENS[p.tier]}/>)
    }

    render() {
        return (
            <SponsorsSection id="sponsors">
                <Container className="d-flex mx-auto h-100">
                    <SeaweedContainer className="flex-column">
                        <SponsorsSymbol className="align-self-start flex-shrink-1 w-100 mb-0"/>
                        <div className="flex-grow-1">
                        </div>
                    </SeaweedContainer>
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row">
                                <SectionHeader>Sponsors</SectionHeader>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                {this.renderSponsors(sponsors)}
                            </div>
                            <div className="row">
                                <SectionHeader>Partners</SectionHeader>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                {this.renderSponsors(partners)}
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </SponsorsSection>
        )
    }
}

export default Sponsors;