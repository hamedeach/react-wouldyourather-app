import Logo from '../assets/Logo.png';
import React from "react";


export default function LoginBox() { 
    return (
        <div className='box-div'>
            <div className='box-title'>
                <h2>Welcome to the Would You Rather App!</h2>
                <h3>Please sign in to continue</h3>
            </div>
            <div>
                <img src={Logo} alt="Would you rather" />
                <h1 className='colored-title'> Sign in </h1>
                <div className='custom-select'>
                    <select name="username" id="username">
                        <option value="dad">vvv</option>
                        <option value="Seif">Seif</option>
                        <option value="Dalida">Dalida</option>
                    </select>
                </div>
                <div className='signin-button'>
                    <button onClick={textclick}> Sign in </button>
                </div>



            </div>
        </div>

    )

    
}

function textclick(){
    alert();

}