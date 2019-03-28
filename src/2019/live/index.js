import React, {Component} from 'react';
import Schedule from './components/Schedule';
import Nav from './components/Nav';
import Links from './components/Links';

import {
    Page,
    Container
} from '../styles';



class Live extends Component {

    render() {
        return (
            <>
                <Nav />
                <div className="container-fluid bg-primary">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            Countdown
                        </div>
                    </div>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-9">
                            <Links/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-primary">
                    <div className="row">
                        <div className="col-md-8">
                            <Schedule />
                        </div>
                        <div className="col-md-4">
                            component to pull announcements from airtable and render them here - no designs yet so do whatever for now
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Live;