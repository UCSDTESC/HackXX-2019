import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {Badge} from './styles';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Involved from './components/Involved';
import Schedule from './components/Schedule';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

class HackXX2019Page extends Component {

    render() {
        return (
            <>
                <Nav />
                <Hero />
                <About />
                <Involved />
                <Schedule />
                <Faq />
                <Sponsors />
                <Footer />
                <Badge href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white" target="_blank">
                    <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" alt="Major League Hacking 2019 Hackathon Season" style={{width:'100%'}}/>
                </Badge>
            </>
        )
    }
}

export default withRouter(HackXX2019Page);