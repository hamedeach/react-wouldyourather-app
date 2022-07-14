
import React, { Component } from "react";
import Rank from "./Rank";
import { connect } from 'react-redux';

class Leaderboard extends Component {



    render() {
        const { users } = this.props;

        const rankedUsers= users.map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
            .sort((a, b) => a.total - b.total)
            .reverse()
            .slice(0, 3);
        return (
            <div>
                <div className="leaderboard-item">

                    <Rank Cup={"gold"} User={rankedUsers[0]}/>
                    <hr />
                    <Rank Cup={"silver"} User={rankedUsers[1]}/>
                    <hr />
                    <Rank Cup={"bronze"} User={rankedUsers[2]}/>
                    <hr />
                </div>
            </div>

        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map(id => {
            return users[id]
        }),


    }
}

export default connect(mapStateToProps)(Leaderboard);




