
import React,{Component} from "react";

class UserInfo extends Component{

    render(){
        return(
            <div className="user-container">
                <div className="userinfo-text">
                    <span >Hello, Seif</span> 
                </div>
                <div>
                <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" alt={`avatar of `} className='avatar' />
                </div>
                <div className="userinfo-text">
                  <span >Logout</span>
                </div>
            </div>
        )
    }

}
export default UserInfo;