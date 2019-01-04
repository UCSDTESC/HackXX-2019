import React, {Component} from 'react';

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
                <Hero />
                <About />
                <Involved />
                <Schedule />
                <Faq />
                <Sponsors />
                <Footer />
            </>
        )
    }
}

export default HackXX2019Page;