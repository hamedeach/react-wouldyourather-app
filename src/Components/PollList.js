import React, { Component } from "react";
import Poll from "./Poll";
import { connect } from 'react-redux';

class PollList extends Component {

    render() {

        const { authedUser,users, questions } = this.props;
        console.log('/*/*/*/*/*');
        console.log(questions);
        return (
            <div className="polls-div">
                <div className="poll-tab">
                    <h2 className="active-poll-tab-op">not Answer Questions</h2>
                    <h2 className="poll-tab-op">Answer Questions</h2>
                </div>
                <div>
                    <Poll />
                    <Poll />
                    <Poll />

                </div>
            </div>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions,
    }

}
export default connect(mapStateToProps)(PollList);