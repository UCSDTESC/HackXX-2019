import React, {Component} from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from '../../constants';

const Popup = styled.div`
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y + 16}px;
    width: 18rem;
    z-index: 1000;
    background: white;
    border-radius: 7px;
    padding: ${BORDER_RADIUS};
    font-family: Roboto, sans-serif;
`

class SchedulePopup extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const {isOpen, event} = this.props;

        if (!isOpen) return <div></div>;
        console.log(event);
        return (
            <Popup x={event.x} y={event.y}>
                <h5>{event.title}</h5>

                <p>
                    {event.description}
                </p>
            </Popup>
        )
    }
}

export default SchedulePopup;