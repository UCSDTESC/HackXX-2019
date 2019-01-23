import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/js/bootstrap';

import {
    BORDER_RADIUS,
    PURPLE,
    LIGHT_BLUE
} from '../constants';

const QuestionContainer = styled.div`
    width: 100%;
    background: white;
    color: blue;
    font-size: 1.35rem;
    font-weight: bold;

    ${props => props.isFirst ?
        `border-top-left-radius: ${BORDER_RADIUS};
        border-top-right-radius: ${BORDER_RADIUS};` 
        : ``
    }

    ${props => props.isLast ?
        `border-bottom-left-radius: ${BORDER_RADIUS};
        border-bottom-right-radius: ${BORDER_RADIUS};` 
        : ``
    }

    padding: 1rem;
`

const QuestionContent = styled.div`
    background: white;
    color: black;
    text-decoration: none;
    text-align: center;
    padding: 1rem 2rem;
`

const QuestionText = styled.a`
    color: ${PURPLE};
    text-decoration: none;

    &:hover {
        color: ${LIGHT_BLUE}
    }
`

class Question extends Component {

    render() {

        const {
            idx, 
            question, 
            answer,
            isFirst,
            isLast
        } = this.props;

        return (
            <>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" id={`heading-${idx}`} role="tab">
                            <QuestionContainer className="panel-title" isLast={isLast} isFirst={isFirst}>
                                <QuestionText className="collapsed w-100 d-block text-center" role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse-${idx}`} aria-expanded="false" aria-controls={`collapse-${idx}`}>
                                    {question}
                                {/*<i className="pull-right fa fa-plus float-right mt-1 question__icon"></i>*/}
                                </QuestionText>
                                <QuestionContent className="panel-collapse collapse mt-3" id={`collapse-${idx}`} role="tabpanel" aria-labelledby={`heading-${idx}`}>
                                    <div className="panel-body">
                                        <p className="mb-0">
                                            {answer}
                                        </p>
                                    </div>
                                </QuestionContent>
                            </QuestionContainer>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Question;