import React, { Component } from 'react';
import styled from 'styled-components';

import {withRouter} from 'react-router-dom';
import { mediaBreakpointDown } from '../../../breakpoints';


const CountdownContainer = styled.div`
    background: #CEFFE8;
    display: block;
    margin: auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    width: 670px;
    box-shadow: 0px 0px 10px 
        rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    ${mediaBreakpointDown('lg-xl', `
        width: 80%;
    `)}
`

const CountdownHeader = styled.p`
    display: inline-block;
    vertical-align: middle;

    background-color: #EF767A;
    color: white;

    font-family: Quicksand;
    font-style: normal;
    font-size: 1.5rem;
    line-height: normal;
    text-align: center;

    box-shadow: 0px 4px 4px 
        rgba(0, 0, 0, 0.25);

    padding-top: 1rem;
    padding-bottom: 1rem;

    width: 100%;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

const CountdownIcon = styled.img`
    margin-right: 0.5rem;
    display: inline-block;
    vertical-align: middle;

    ${mediaBreakpointDown('countdown', `
        width: 1.5rem;
    `)}
`

const CountdownText = styled.p`
    color: black;
    font-family: Quicksand;
    font-style: normal;
    font-size: 4rem;
    line-height: normal;
    text-align: center;

    padding-bottom: 1rem;
    padding-left: none;
    padding-right: none;

    ${mediaBreakpointDown('countdown', `
        font-size: 1.5rem;
    `)}
`


class Countdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            endDate: new Date('April 7, 2019 13:30:00'),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.state.endDate);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.endDate), 1000);
    }  

    getTimeUntil() {
        const time = this.state.endDate - Date.now();

        if (time < 0) {
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            })
        }
        else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ days, hours, minutes, seconds });
        }
    }

    render() {
        return (
            <CountdownContainer>
                <CountdownHeader><CountdownIcon src="/countdown.svg"/>Countdown</CountdownHeader>
                <CountdownText><b>{this.state.days}</b>d : <b>{this.state.hours}</b>h : <b>{this.state.minutes}</b>m : <b>{this.state.seconds}</b>s</CountdownText>
            </CountdownContainer>
        )
    }
}

export default withRouter(Countdown);