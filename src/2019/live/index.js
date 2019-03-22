import React, {Component} from 'react';
import Schedule from './components/Schedule';
import Announcements from './components/Announcements';

import {
    Page,
    Container
} from '../styles';



class Live extends Component {

    render() {
        return (
            <div className="container-fluid bg-primary">
                <div className="row">
                    <div className="col-md-8">
                        <Schedule />
                    </div>
                    <div className="col-md-4">
                        <Announcements />
                    </div>
                </div>
            </div>
        )
    }
}

export default Live;