import React, {Component} from 'react';
import styled from 'styled-components';

import Schedule from './components/Schedule';
import Nav from './components/Nav';
import Links from './components/Links';
import Announcements from './components/Announcements';
import Countdown from './components/Countdown';
import { PURPLE } from '../constants';

const Body = styled.div`
    background: #7D7ABC;
    height: auto;
`

const Reach = styled.div`
    font-size: 1.5rem;
    color: white;

    .o {
        color: #FFC5C7;
    }

    .m {
        color: #EFC7FF;
    }
`

const Footer = styled.footer`
    font-size: 1.5rem;
    padding: 2rem;
    text-align: center;
    color: white;
    background: #45436B;

    a {
        color: white;
        text-decoration: underline;

        &:hover {
            color: ${PURPLE};
        }
    }
`

class Live extends Component {

    render() {
        return (
            <>
                <Nav />
                <Body>
                    <div className="container-fluid">
                        <div className="row text-center justify-content-center">
                            <div className="col-md-9">
                                <Countdown />
                            </div>
                        </div>
                        <div className="row text-center justify-content-center">
                            <div className="col-md-9">
                                <Links/>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row row-eq-height">
                            <div className="col-lg-8">
                                <Schedule />
                            </div>
                            <div className="col-lg-4">
                                <Announcements />
                            </div>
                        </div>
                    </div>
                    <Reach className="pt-2 pb-5 text-center">
                        Need help?  👩‍💻  Reach out to an <span className="o">organizer</span> or <span className="m">mentor</span> in person or on Slack!
                    </Reach>
                    <Footer>
                        Made with 💜 by <a target="_blank" href="https://tesc.ucsd.edu">TESC</a>
                    </Footer>
                </Body>
            </>
        )
    }
}

export default Live;