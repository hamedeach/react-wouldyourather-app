
import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleAsynSubmitAnswer } from '../actions/questions'
import { Navigate } from "react-router-dom";





class UnansweredQuestion extends Component {
  

    state = {
        answer: '',
        op1: false,
        op2: false,
        tohome:false,
    }

    handleSelectChange = (e) => {
        switch (e.target.id) {
            case "op1":
                this.setState(() => ({
                    answer: 'optionOne',
                    op1: true,
                    op2: false,

                }))
                break;
            case "op2":
                this.setState(() => ({
                    answer: 'optionTwo',
                    op1: false,
                    op2: true,
                }))
                break;
            default: break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        /* to-do submit answer */
        const { answer } = this.state;
        const { dispatch, poll, authedUser } = this.props;
        dispatch(handleAsynSubmitAnswer(poll, answer));
        console.log('Submit poll answer..');
        this.setState(() => ({
            answer: '',
            op1: false,
            op2: false,
            tohome:true,
        }))

    }



    render() {
        const{tohome}= this.state;
        if(tohome)
        return <Navigate to="/"/>

        const {poll, authedUser, questions, users } = this.props
        const question_obj = questions.find((q) => { return q.id === poll })
        const author_obj = users.find((u) => { return u.id === question_obj.author })
        const question_user_name = author_obj.name;
        const question_user_avatarURL = author_obj.avatarURL;



        return (
            <div >
                <div className="question">
                    <div>
                        <h1>{question_user_name} Asks:</h1>
                    </div>
                    <div className="question-answeres">
                        <div className="avatar-div">
                            <img src={question_user_avatarURL} alt={`avatar of ${question_user_name}`} className='question-avatar' />
                        </div>
                        <div className="answeres-div">
                            <div>
                                <h2>Would You Rather ...</h2>
                            </div>
                            <hr />
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="poll-option">
                                        <input type="radio" id="op1" name="fav_language" value="op1"
                                            onChange={this.handleSelectChange}
                                            checked={this.state.op1} />
                                        <label >{question_obj.optionOne.text}</label>
                                    </div>
                                    <hr />
                                    <div className="poll-option">
                                        <input type="radio" id="op2" name="fav_language" value="op2"
                                            onChange={this.handleSelectChange}
                                            checked={this.state.op2} />
                                        <label >{question_obj.optionTwo.text}</label>

                                    </div>
                                    <button disabled={this.state.answer === ''} type='submit'>Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
    
}


function mapStateToProps({ authedUser, users, questions ,poll}) {
    return {
        poll,
        authedUser,
        users: Object.keys(users).map(id => {
            return users[id]
        }),
        questions: Object.keys(questions).map(id => {
            return questions[id]
        }),
    }

}


export default connect(mapStateToProps)(UnansweredQuestion);