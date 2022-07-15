
import React, { Component } from "react";
import { connect } from 'react-redux';

class AnsweredQuestion extends Component {


    render() {
        const { authedUser, poll, questions, users } = this.props
        const question_obj = questions.find((q) => { return q.id === poll })
        debugger;
        const author_obj = users.find((u) => { return u.id === question_obj.author })
        const question_user_name = author_obj.name;
        const question_user_avatarURL = author_obj.avatarURL;

        
        let selected_option_no = 0;
        (question_obj.optionOne.votes.includes(authedUser)) ? selected_option_no = 1
            :
            (question_obj.optionTwo.votes.includes(authedUser)) ? selected_option_no = 2
                :
                selected_option_no = 0;



        const option_one_votes = question_obj.optionOne.votes.length;
        const option_two_votes = question_obj.optionTwo.votes.length;
        const total_votes = option_one_votes + option_two_votes
        const percent_option_one = 100 * option_one_votes / total_votes
        const percent_option_two = 100 * option_two_votes / total_votes



        return (
            <div className="question">
                <div>
                    <h1>Asked by {question_user_name}</h1>
                </div>
                <div className="question-answeres">
                    <div className="avatar-div">
                        <img src={question_user_avatarURL} alt={`avatar of ${question_user_name}`} className='question-avatar' />
                    </div>
                    <div className="answeres-div">
                        <div>
                            <h2>Results</h2>
                        </div>
                        <hr />
                        <div>
                            <div className="poll-option">
                                <h1> {question_obj.optionOne.text}</h1>
                                <h2>{percent_option_one}%</h2>
                                <h2>{option_one_votes} out of {total_votes} Votes</h2>
                                {(selected_option_no === 1) && <h2>You vote this</h2>}
                            </div>
                            <hr />
                            <div className="poll-option">
                                <h1> {question_obj.optionTwo.text}</h1>
                                <h2>{percent_option_two}%</h2>
                                <h2>{option_two_votes} out of {total_votes} Votes</h2>
                                {(selected_option_no === 2) && <h2>You vote this</h2>}

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


export default connect(mapStateToProps)(AnsweredQuestion);