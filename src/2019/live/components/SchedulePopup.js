import React, {Component} from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS, PURPLE } from '../../constants';
import moment from 'moment';

const Popup = styled.div`
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y + 16}px;
    width: 18rem;
    z-index: 1000;
    background: white;
    border-radius: 25px;
    border: solid 1px ${PURPLE};
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
        return (
            <Popup x={event.x} y={event.y}>
                <h5>{event.title}</h5>
                
                <p>
                    {moment(event.startTime).format('h:mma')} - {moment(event.endTime).format('h:mma')}
                    <div>
                        {event.location}
                    </div>
                </p>
                <p>
                    {event.description}
                </p>
            </Popup>
        )
    }
}

export default SchedulePopup;