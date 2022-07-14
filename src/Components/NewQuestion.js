
import React, { Component } from "react";
import { connect } from 'react-redux';
import {handleAsyncAddPoll} from '../actions/questions'



class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    handleChange = (e) => {
        switch (e.target.id) {
            case "option1":
                this.setState(() => ({
                    optionOneText: e.target.value,
                }))
                break;
            case "option2":
                this.setState(() => ({
                    optionTwoText: e.target.value,
                }))
                break;
            default: break;
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { optionOneText, optionTwoText } = this.state
        const{dispatch} = this.props
        
        dispatch(handleAsyncAddPoll(optionOneText,optionTwoText))

        console.log('New Poll was added..');
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
        }))
    }

    render() {
        return (
            <div className="box-div">
                <div className="box-title">
                    <h2> New Question !</h2>
                    <h3>Complete the question ...</h3>
                </div>
                <h1> Would You Rather ...</h1>
                <div >
                    <form className="question-div" onSubmit={this.handleSubmit}>
                        <textarea
                            id="option1"
                            placeholder="Option #1 ..."
                            maxLength={300}
                            onChange={this.handleChange}
                            value={this.state.optionOneText}
                        />

                        <h2 className="h2-or"> OR </h2>

                        <textarea id="option2"
                            placeholder="Option #2 ..."
                            maxLength={300}
                            onChange={this.handleChange}
                            value={this.state.optionTwoText}
                        />
                        <br />

                        <button
                            id="submit-btn"
                            disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}
                            type='submit'>
                            Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}



export default connect()(NewQuestion);