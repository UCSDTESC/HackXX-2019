import React, {Component} from 'react';
import styled from 'styled-components';

import {
    PURPLE
} from '../constants';

const FooterContainer = styled.footer`
    background: ${PURPLE};
    color: white;
    padding: 2rem;
    text-align: center;
    font-size: 1.6rem;
`


class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <div>
                    HackXX is brought to you by TESC aka Triton Engineering Student Council.
                </div>
                <div>
                    Learn more about us at tesc.ucsd.edu!
                </div>
            </FooterContainer>
        )
    }
}

export default Footer;