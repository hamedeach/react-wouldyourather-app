
import React, { Component } from "react";
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

class UserInfo extends Component {


    logout = (e) => {
        this.props.dispatch(setAuthedUser(null));
    }

    render() {
        const { authedUser, users } = this.props;

        const authedUser_Obj = users.find((user) => user.id === authedUser);
        const autheduser_avatarURL = authedUser_Obj.avatarURL;
        const autheduser_name = authedUser_Obj.name;
        const autheduser_id = authedUser_Obj.id;

        return (
            <div className="user-container">
                <div className="userinfo-text">
                    <span >Hello, {autheduser_name}</span>
                </div>
                <div>
                    <img src={autheduser_avatarURL} alt={`avatar of ${autheduser_name}`} className='avatar' />
                </div>
                <div className="userinfo-text">
                    <span onClick={this.logout} >Logout</span>
                </div>
            </div>
        )
    }

}


function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.keys(users).map(id => { return users[id] }),
        authedUser,
    }

}
export default connect(mapStateToProps)(UserInfo);