import React, {Component} from 'react';
import styled from 'styled-components';

import {ReactComponent as Cal} from '../svg/cal.svg';

import {
    BORDER_RADIUS, LIGHT_BLUE, PURPLE
} from '../../constants';

const Search = styled.div`
    width: 100%;
    border: 0;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    outline: none;
    font-size: 1.5rem;
    padding: 1.8rem 0;
    background: ${LIGHT_BLUE};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SearchContents = styled.div`
    width: 75%;
    color: white;
    font-weight: 800;
`

const SearchBox = styled.div`
    border-radius: ${BORDER_RADIUS};
    border: 0;
    width: 50%;
    outline: 0;
    font-size: 1.3rem;
    background: white;
    display: flex;
    height: 3.2rem;
    position: relative;
    
    border-bottom-left-radius: ${props => props.isOpen ? '0' : BORDER_RADIUS};
    border-bottom-right-radius: ${props => props.isOpen ? '0' : BORDER_RADIUS};

    input {
        outline: 0;
        border: 0;
        flex: 1;
        margin: 0.5rem 0;
        width: 70%;
    }
`

const Dropdown = styled.div`
    position: absolute;
    margin-top: 3.2rem;
    background: white;
    color: ${PURPLE};
    width: 100%;
    z-index: 10000;
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};

`

const Item = styled.div`
    padding: 1rem;
    border-bottom-left-radius: ${props => props.isLast ? BORDER_RADIUS : '0px'};
    border-bottom-right-radius: ${props => props.isLast ? BORDER_RADIUS : '0px'};
`

function DropdownItem(props) {
    return (
        <Item isLast={props.isLast} onClick={() => props.showPopup(props.event)}>
            {props.children}
        </Item>
    )
}

class ScheduleSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            showDropdown: false
        }
    }

    onSearchInput = (e) => {
        this.setState({query: e.target.value})
    }

    search(q) {
        return this.props.options
                .filter(x => {
                    return x.title.includes(q)
                })

    }

    renderDropdown = () => {

        if (this.state.showDropdown) {

            let items = this.search(this.state.query).slice(0, 4)
            return (
                <Dropdown>
                    {items.map((item, i) => {
                        return (
                            <DropdownItem 
                                key={i} 
                                isLast={i === items.length - 1}
                                event={item}
                                showPopup={this.props.showPopup}
                            >
                                {item.title}
                            </DropdownItem>
                        )
                    })}
                </Dropdown>
            );
        }
        return;
    }

    render() {

        const {options} = this.props;

        return (
            <Search className="d-flex justify-content-center"> 
                <SearchContents className="d-flex">
                    <Cal className="mt-2 mx-2" style={{fill: 'white'}}/> Timeline
                    {/*<SearchBox className="ml-auto flex-column" isOpen={this.state.query.length > 0 || this.state.showDropdown}>
                        <div className="w-100 d-flex flex-row">
                            <img src="/search.svg" className="mx-2"/>
                            <input className="mr-1" 
                                onChange={this.onSearchInput} 
                                onFocus={() => this.setState({showDropdown: true})}
                            /> 
                        </div>

                {this.renderDropdown()}
        </SearchBox>*/}
                </SearchContents>
            </Search>
        )
    }
}

export default ScheduleSearch;