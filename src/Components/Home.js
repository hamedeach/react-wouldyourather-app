import React, { Component } from "react";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

class Home extends Component {

    render() {
        return (
            <div>
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

            </div>


        )
    }


}
export default Home;