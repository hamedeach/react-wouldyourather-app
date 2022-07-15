import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Poll extends Component {

    state = {

        selected_Poll_id: '',
        selected_poll_type: '',

    }


    handleViewPoll = (e) => {
        /*
        e.preventDefault();
        const { pollid, users, authedUser } = this.props;
        const poll_type = (Object.keys(users.find(u => u.id === authedUser).answers).includes(pollid));



        this.setState(() => ({
            selected_Poll_id: pollid,
            selected_poll_type: poll_type,
        }))
        */

    }

    render() {
        if (this.state.selected_Poll_id !== '' && this.state.selected_poll_type !== '') {
            switch (this.state.selected_poll_type) {
                case false:
                  //  return <Navigate to={`/question/${this.state.selected_Poll_id}`} />
                case true:
                  //  return <Navigate to={`/result/${this.state.selected_Poll_id}`} />


            }


        }

        const { pollid, questions, users } = this.props
        const question_obj = questions.find((q) => { return q.id === pollid })
        const author_obj = users.find((u) => { return u.id === question_obj.author })
        const question_user_id = author_obj.id;
        const question_user_name = author_obj.name;
        const question_user_avatarURL = author_obj.avatarURL;
        return (
            <div className="poll-container">
                <div>
                    <h1>{question_user_name} Asks</h1>
                </div>
                <div >
                    <div className="poll-details-container">
                        <img src={question_user_avatarURL} alt={`avatar of ${question_user_name} `} className="poll-avatar" />
                        <div className="poll-info-container">
                            <h1>Would You Rather...</h1>
                            <h2>{question_obj.optionOne.text}...</h2>
                            <Link to={{
                                pathname:`/question/${pollid}`,
                                pollid:`${pollid}`,
                            }}>
                                <button onClick={this.handleViewPoll}>View Poll</button>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, pollid) {
    return {
        pollid: pollid.pollid,
        authedUser,
        users: Object.keys(users).map(id => {
            return users[id]
        }),
        questions: Object.keys(questions).map(id => {
            return questions[id]
        }),
    }

}

export default connect(mapStateToProps)(Poll)