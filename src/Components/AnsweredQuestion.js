
import React from "react";

export default function AnsweredQuestion() {
    return (
        <div className="question">
            <div>
                <h1>Asked by Seif</h1>
            </div>
            <div className="question-answeres">
                <div className="avatar-div">
                    <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" alt={`avatar of `} className='question-avatar' />
                </div>
                <div className="answeres-div">
                    <div>
                        <h2>Results</h2>
                    </div>
                    <hr />
                    <div>
                            <div className="poll-option">
                                <h1> go to school by bus ??</h1>
                                <h2>30%</h2>
                                <h2>1 out of 3 Votes</h2>
                                <h2>You vote this</h2>
                            </div>
                            <hr />
                            <div className="poll-option">
                                <h1>go to the club?</h1>
                                <h2>70%</h2>
                                <h2>2 out of 3 Votes</h2>

                            </div>
                    </div>

                </div>
            </div>

        </div>

    )
}