import React, {Component} from 'react';
import Schedule from './components/Schedule';

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
                        component to pull announcements from airtable and render them here - no designs yet so do whatever for now
                    </div>
                </div>

            </div>
        )
    }
}

export default Live;