import React, {Component} from 'react';
import styled from 'styled-components';

import Schedule from './components/Schedule';
import Nav from './components/Nav';
import Links from './components/Links';
import Announcements from './components/Announcements';
import Countdown from './components/Countdown';

const Body = styled.div`
    background: #7D7ABC;
    height: auto;
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
                </Body>
            </>
        )
    }
}

export default Live;