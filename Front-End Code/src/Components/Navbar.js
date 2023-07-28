import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (  
        <>
        <div className="head">
        <nav className="navbar">
            <div className="logo">
            <Link to="/">
            <img  src="/Logo.jpg" alt="" height={ 50 }/>
            </Link>
            <Link to="/">
            <h1>Fitness Tracker</h1>
            </Link>
            
            </div>
            <div className="nav">
                <Link to="/metrics">
                    <h1>Metrics</h1>
                </Link>
            </div>
            <div className="nav">
                <Link to="/hydration">
                    <h1>Workout-Logging</h1>
                </Link>
            </div>
            <div className="nav">
                <Link to="/sleep">
                    <h1>Sleep</h1>
                </Link>
            </div>
            <div className="links">
            <Link to="/login">
                <h1>Login</h1>
            </Link>
            <Link to="/register">
                <h1>Register</h1>
            </Link>
            </div>    
        </nav>
        </div>
        </>
    );
}

export default Navbar;