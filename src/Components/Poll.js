import React from "react";

export default function Poll(){
    return(
        <div className="poll-container">
            <div>
                <h1>Seif Asks</h1>
            </div>
            <div >
                <div className="poll-details-container">
                    <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" alt={`avatar of `} className="poll-avatar"/>
                    <div className="poll-info-container">
                        <h1>Would You Rather...</h1>
                        <h2>...option A</h2>
                        <button>View Poll</button>
                    </div>
                </div>
            </div>
        </div>
    )
}