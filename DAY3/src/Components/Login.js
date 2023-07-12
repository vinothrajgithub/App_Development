import React from "react";
import { Link } from "react-router-dom";
function LoginPage() {
    return (
        <>
        <div className="card">
            <div className="card-split">
                <img src="/Login.jpg" height={ 250 } />
            </div>
            <div className="card-split right">
                <h1>Login</h1>
                <div className="card-row login">
                    <h3>Email</h3>
                    <input type="text" id="email" name="email" placeholder="Enter the email"/>  
                </div>  
                <div className="card-row login">
                    <h3>Password</h3>
                    <input type="password" id="pwd" name="pwd" placeholder="Enter the Password"/>  
                </div>
                <br/>
                <div className="card-row login">
                    <Link to="/">
                        <button className="button"> Log In</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
      );
}

export default LoginPage;