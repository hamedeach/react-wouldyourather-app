import React, { Component } from "react";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import PollList from './PollList.js';

class Home extends Component {

    render() {
        return (
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
        )
    }


}
export default Home;