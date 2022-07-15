
import React from "react";
import { Link, Router } from 'react-router-dom';


export default function Navbar() {
    return (



            <nav>
                <ul>
                    <Link to="/" className="active-navitem">
                        <li >Home</li>
                    </Link>
                    <Link to="/add" className="navbar-item">
                        <li  >New Question</li>
                    </Link>
                    <Link to="/leaderboard" className="navbar-item">
                        <li >Leader Board</li>
                    </Link>

                </ul>

            </nav>
  

    )
}