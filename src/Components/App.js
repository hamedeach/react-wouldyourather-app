

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoginBox from './loginBox.js';
import Home from './Home.js';
import LoadingBar from 'react-redux-loading-bar'
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import NewQuestion from './NewQuestion.js';
import Leaderboard from "./Leaderboard";

import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';






class App extends Component {

  componentDidMount() {

    this.props.dispatch(handleInitialData());

  }

  render() {
    const { authedUser, isloading } = this.props;
    return (


      (isloading === true) ?
        <LoadingBar />
        :
        (

          (authedUser === null) ?
            <LoginBox />

            :

            <Fragment>

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



              <Router>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/add' element={<NewQuestion/>} />
                  <Route path='/leaderboard' element={<Leaderboard/>} />
                </Routes>
              </Router>
            </Fragment>
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
