import styled from 'styled-components';
import {mediaBreakpointDown} from '../breakpoints';

export const Page = styled.section`
    width: 100%;
`
export const Container = styled.div`
    max-width: 80%;
    height: 100%;
    ${mediaBreakpointDown('sm', `
        text-align: center;
    `)}
`;

export const SeaweedContainer = styled.div`
    width: 128px;
    min-width: 128px;
    display: flex;

    ${mediaBreakpointDown('sm', `
        display: none;
    `)}
`

export const SeaweedStem = styled.div`
    background: url(seaweed-tail.svg);
    background-position: center 0;
    background-repeat: repeat-y;
    background-size: auto;

    @keyframes movingSeaweed {
        from { background-position: center 0; }
        to { background-position: center 326px; }
    }

    animation: movingSeaweed 8s linear infinite;

`

export const SectionHeader = styled.h1`
    color: white;
    font-weight: 800;
    font-size: 3rem;
    margin-top: 2rem;

    ${mediaBreakpointDown('md', `
        font-size: 2.4rem;
    `)}
`

export const SectionContent = styled.div`
    flex-grow: 1;
    padding-left: 2rem;
    font-size: 1.3rem;
    color: white;
    margin-bottom: 50px;

    ${mediaBreakpointDown('sm', `
        padding-left: 0;
    `)}
`

export const SectionSubHeader = styled.div`
    color: white;
    font-size: 2rem;
    font-weight: 800;

    ${mediaBreakpointDown('md', `
        font-size: 1.5rem;
    `)}
`

export const HideBelow = (breakpoint) => styled.div`
    ${mediaBreakpointDown(breakpoint, `
        display: none !important;
    `)}
`

export const InlineMermaid = styled.div`
    width: 10rem;
`
export const WhiteButton = styled.a`
    border: 4px solid white;
    border-radius: 16px;
    color: white;
    background: transparent;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 0.75rem;
    position: relative;
    z-index: 1;
    font-size: 1.4rem;

    ${mediaBreakpointDown('md', `
        margin-top: 1rem;
        margin-bottom: 1rem;
    `)}
`

export const Badge = styled.a`
    display:block;
    max-width:80px;
    min-width:60px;
    position:fixed;
    right: 1rem;
    top:0;
    width:10%;
    z-index:10000;

    ${mediaBreakpointDown('lg', `
        left: 0rem;
    `)}
`