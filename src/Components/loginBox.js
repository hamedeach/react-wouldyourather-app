import Logo from '../assets/Logo.png';
import React, { Component } from "react";


import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser'


class LoginBox extends Component {


    signin= (e) => {
        const userid = document.getElementById('userid-select').value;
        this.props.dispatch(setAuthedUser(userid));
    }

    handleChange = (e) => {
        const userid = e.target.value;
        const signin_btn = document.getElementById('signin-btn');
        signin_btn.disabled = false;
        signin_btn.onclick = this.signin;
    }



    render() {

        const users = this.props.users

        return (
            <div className='box-div'>
                <div className='box-title'>
                    <h2>Welcome to the Would You Rather App!</h2>
                    <h3>Please sign in to continue</h3>
                </div>
                <div>
                    <img src={Logo} alt="Would you rather" />
                    <h1 className='colored-title'> Sign in </h1>
                    <div className='custom-select'>
                        <select id="userid-select" onChange={this.handleChange} defaultValue="default">
                            <option disabled value="default"> -- select an option -- </option>
                            {
                                users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <button className='signin-button' disabled id='signin-btn' onClick={this.signin}> Sign in </button>




                </div>
            </div>

        )
    }
}


function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map(id => {
            return users[id];
        })
    }

}


export default connect(mapStateToProps)(LoginBox);