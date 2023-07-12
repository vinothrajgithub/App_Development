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
                <Link to="/activity">
                    <h1>Activity</h1>
                </Link>
            </div>
            <div className="nav">
                <Link to="/nutrition">
                    <h1>Nutrition Tracking</h1>
                </Link>
            </div>
            <div className="nav">
                <Link to="/workout">
                    <h1>Workout-Logging</h1>
                </Link>
            </div>
            <div className="nav">
                <Link to="/goals">
                    <h1>Goals</h1>
                </Link>
            </div>
            <div className="nav">
                <Link to="/progess">
                    <h1>Progress</h1>
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