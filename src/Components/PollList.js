import React,{Component} from "react";
import Poll from "./Poll";

class PollList extends Component{

    render(){
        return(
            <div className="polls-div">
                <div className="poll-tab">
                    <h2 className="active-poll-tab-op">not Answer Questions</h2>
                    <h2 className="poll-tab-op">Answer Questions</h2>
                </div>
                <div>
                    <Poll/>
                    <Poll/>
                    <Poll/>
                 
                </div>
            </div>
        )
    }
}
export default PollList;