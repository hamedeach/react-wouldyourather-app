import React from "react";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import PollList from './PollList.js';


export default function Home() {
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






