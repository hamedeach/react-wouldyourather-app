





import React, { Component, Fragment } from 'react';
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
    const autheduser = this.props.authedUser;
    return (
      (autheduser === null) ?
        <LoginBox />
        :
        <Home />
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }

}

export default connect(mapStateToProps)(App);
