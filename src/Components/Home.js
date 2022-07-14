import React, { Component } from "react";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import PollList from './PollList.js';

import NewQuestion from './NewQuestion.js';
import AnsweredQuestion from './AnsweredQuestion.js'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poll_tab_id: '0',
        }

    }

    changePollsTab = (tabid) => {

        this.setState(() => ({
            poll_tab_id: tabid
        }))


    }

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


                <AnsweredQuestion Pollid={'8xf0y6ziyjabvozdd253nd'}/>
                
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br />
                <hr />
                <NewQuestion />
                <br />
                <hr />
                <PollList PollTabID={this.state.poll_tab_id} ChangePollsTab={this.changePollsTab} />

            </div>
        )
    }
}
export default Home;






