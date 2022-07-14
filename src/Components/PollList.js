import React, { Component } from "react";
import Poll from "./Poll";
import { connect } from 'react-redux';

class PollList extends Component {

    changetab = (e) => {
        switch (e.target.id) {
            case '1':
                {

                    document.getElementById("0").setAttribute("class", "poll-tab-op");
                    document.getElementById("1").setAttribute("class", "active-poll-tab-op");
                    break;

                }
            default:
                {
                    document.getElementById("1").setAttribute("class", "poll-tab-op");
                    document.getElementById("0").setAttribute("class", "active-poll-tab-op");
                    break;
                }

        }
        this.props.ChangePollsTab(e.target.id);
    }

    render() {

        const { authedUser, users, questions } = this.props;
        return (
            <div className="polls-div">
                <div className="poll-tab">
                    <h2 id={"0"} onClick={this.changetab} className="active-poll-tab-op"> Not-answered Questions</h2>
                    <h2 id={"1"} onClick={this.changetab} className="poll-tab-op">Answered Questions</h2>
                </div>
                <ul>
                    {
                        questions.map((ques) => (
                            <li key={ques.id}>
                                <Poll pollid={ques.id} />
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }, PollProps) {

    const all_questions_arr = Object.keys(questions).map(id => {
        return questions[id]
    });

    const authedUserObj = Object.keys(users).map(id => {
        return users[id]
    }).find(u => u.id === authedUser);
   // console.log(authedUserObj);

    const autheduser_answers = Object.keys(authedUserObj.answers);
    //console.log(autheduser_answers)
    let filtered_questions = [];
    filtered_questions = [];

    switch (PollProps.PollTabID) {
        case '1': // answer
            filtered_questions = all_questions_arr.filter((q) => (autheduser_answers.includes(q.id)));
            break;
        default:
            filtered_questions = all_questions_arr.filter((q) => !(autheduser_answers.includes(q.id)));
            break;

    }
    //console.log(filtered_questions);

    return {
        authedUser,
        users: Object.keys(users).map(id => {
            return users[id]
        }),
        questions: filtered_questions.sort((a, b) => b.timestamp - a.timestamp),
    }

}
export default connect(mapStateToProps)(PollList);