


import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import LoginBox from './loginBox.js';
import PollList from './PollList.js';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'

//import Home from './Home.js';
//import NewQuestion from './NewQuestion.js';
//import Leaderboard from './Leaderboard.js';
//import AnsweredQuestion from './AnsweredQuestion.js';
//import UnansweredQuestion from './UnansweredQuestion.js';



class App extends Component {

  componentDidMount() {

    this.props.dispatch(handleInitialData());

  }


  render() {
    const autheduser = this.props.authedUser;


    return (

      (autheduser === null) ?
        <LoginBox />
        :
        <div className="App">
          <div>
            <div className="homebar-container">
              <div className="navbar-container">
                <Navbar />
              </div>
              <div className="userinfo-container">
                <UserInfo />
              </div>

            </div>
            <hr></hr>
          </div>

          <PollList />

        </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }

}

export default connect(mapStateToProps)(App);
