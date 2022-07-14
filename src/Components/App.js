

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoginBox from './loginBox.js';
import Home from './Home.js';


//import NewQuestion from './NewQuestion.js';
//import Leaderboard from './Leaderboard.js';
//import AnsweredQuestion from './AnsweredQuestion.js';
//import UnansweredQuestion from './UnansweredQuestion.js';



class App extends Component {

  componentDidMount() {

    this.props.dispatch(handleInitialData());

  }


  render() {
    const { authedUser, isloading } = this.props;
    return (
      (isloading === true) ?
        null
        :
        (
          (authedUser === null) ?
            <LoginBox />

            :

            <Home />
        )


    );

  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    isloading: (Object.keys(users).length === 0)
  }

}

export default connect(mapStateToProps)(App);
