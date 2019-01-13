import styled from 'styled-components';
import {mediaBreakpointDown} from '../breakpoints';

export const Page = styled.div`
    width: 100%;
    height: 100%;
`
export const Container = styled.div`
    max-width: 80%;
    height: 100%;
    ${mediaBreakpointDown('sm', `
        text-align: center;
    `)}
`;

export const SeaweedContainer = styled.div`
    width: 13%;
    min-width: 8rem;
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
        to { background-position: center 800px; }
    }

    animation: movingSeaweed 40s linear infinite;

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

    ${mediaBreakpointDown('sm', `
        padding-left: 0;
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