


import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
//import LoginBox from './LoginBox.js';
//import Home from './Home.js';
//import NewQuestion from './NewQuestion.js';
//import Leaderboard from './Leaderboard.js';
//import AnsweredQuestion from './AnsweredQuestion.js';
//import UnansweredQuestion from './UnansweredQuestion.js';
import PollList from './PollList.js';


function App() {
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
  );
}

export default App;
