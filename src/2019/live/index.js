import React, {Component} from 'react';
import Schedule from './components/Schedule';

import {
    Page,
    Container
} from '../styles';

class Live extends Component {

    render() {
        return (
            <Page className="bg-primary">
                <Container className="d-flex mx-auto h-100">
                    <Schedule />
                </Container>
            </Page>
        )
    }
}

export default Live;