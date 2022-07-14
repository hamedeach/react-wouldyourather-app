
import React from "react";
import GoldenCup from '../assets/golden-cup.png'
import SilverCup from '../assets/silver-cup.png'
import BronzeCup from '../assets/bronze-cup.png'

export default function Rank(props) {
    const { Cup, User } = props

    return (
        <div className="rank-box">
            <div className="ranked-user">
                <div className="rank-cup">
                    {(Cup === "gold" && <img src={GoldenCup} alt={`golden cup `} className='cup-img' />)}
                    {(Cup === "silver" && <img src={SilverCup} alt={` silver cup `} className='cup-img' />)}
                    {(Cup === "bronze" && <img src={BronzeCup} alt={` bronze cup `} className='cup-img' />)}
                </div>
                <div className="ranked-user-info">
                    <img src={User.avatarURL} alt={`avatar of ${User.name} `} className='ranked-avatar' />
                    <h2>{User.name}</h2>
                </div>
                <div className="rank-user-details">
                    <div className="rank-questions-detials">
                        <div className="detial-txt">
                            <h1>Asked Question</h1>
                        </div>
                        <div className="questions-no">
                            <h1>{User.questionCount}</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="rank-questions-detials">
                        <div className="detial-txt">
                            <h1>Answered Questions</h1>

                        </div>
                        <div className="questions-no">
                            <h1>{User.answerCount}</h1>
                        </div>


                    </div>

                </div>
                <div className="rank-score">
                    <div className="score-detials">
                        <h1> Score</h1>

                    </div>

                    <hr />
                    <div className="score-detials">
                        <h1> {User.total}</h1>

                    </div>


                </div>

            </div>
        </div>
    )
}



