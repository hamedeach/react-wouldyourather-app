import React, { Component } from "react";
import Poll from "./Poll";
import { connect } from 'react-redux';

class PollList extends Component {

    render() {

        const { authedUser,users, questions } = this.props;
        return (
            <div className="polls-div">
                <div className="poll-tab">
                    <h2 className="active-poll-tab-op">not Answer Questions</h2>
                    <h2 className="poll-tab-op">Answer Questions</h2>
                </div>
                <ul>
                    {
                        questions.map((ques)=>(
                            <li key={ques.id}>
                                <Poll pollid={ques.id}/>
                            </li>
                        ))
                    }
                   
                </ul>
            </div>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users: Object.keys(users).map(id => {
            return users[id]}),
        questions: Object.keys(questions).map(id => {
            return questions[id]}),
    }

}
export default connect(mapStateToProps)(PollList);