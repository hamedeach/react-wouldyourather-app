
import React from "react";

export default function UnansweredQuestion() {
    return (
        <div >
            <div className="question">
                <div>
                    <h1>Seif Asks:</h1>
                </div>
                <div className="question-answeres">
                    <div className="avatar-div">
                        <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" alt={`avatar of `} className='question-avatar' />
                    </div>
                    <div className="answeres-div">
                        <div>
                            <h2>Would You Rather ...</h2>
                        </div>
                        <hr />
                        <div>
                            <form>
                                <div className="poll-option">
                                    <input type="radio" id="op1" name="fav_language" value="op1" />
                                    <label for="html">go to school</label>
                                </div>
                                <hr />
                                <div className="poll-option">
                                    <input type="radio" id="op2" name="fav_language" value="op2" />
                                    <label for="html">go to the club</label>

                                </div>
                                <button>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}