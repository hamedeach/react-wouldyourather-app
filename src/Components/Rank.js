
import React, { Component } from "react";
import GoldenCup from '../assets/golden-cup.png'
import SilverCup from '../assets/silver-cup.png'
import BronzeCup from '../assets/bronze-cup.png'

class Rank extends Component {

    render() {
        return (
            <div className="rank-box">
                <div className="ranked-user">
                    <div className="rank-cup">
                        <img src={GoldenCup} alt={`avatar of `} className='cup-img' />
                    </div>
                    <div className="ranked-user-info">
                        <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" alt={`avatar of `} className='ranked-avatar' />
                        <h2>Seif Hamed</h2>
                    </div>
                    <div className="rank-user-details">
                        <div className="rank-questions-detials">
                            <div className="detial-txt">
                                <h1>Asked Question</h1>
                            </div>
                            <div className="questions-no">
                                <h1>200</h1>
                            </div>
                        </div>
                        <hr />
                        <div className="rank-questions-detials">
                            <div className="detial-txt">
                                <h1>Answered Questions</h1>

                            </div>
                            <div className="questions-no">
                                <h1>200</h1>
                            </div>


                        </div>

                    </div>
                    <div className="rank-score">
                        <div className="score-detials">
                            <h1> Score</h1>

                        </div>

                        <hr />
                        <div className="score-detials">
                            <h1> 1000</h1>

                        </div>


                    </div>

                </div>
            </div>
        )
    }
}
export default Rank;

