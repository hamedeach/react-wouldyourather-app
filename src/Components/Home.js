import React, { Component } from "react";
import PollList from './PollList.js';


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

                <PollList PollTabID={this.state.poll_tab_id} ChangePollsTab={this.changePollsTab} />

            </div>
        )
    }
}
export default Home;






