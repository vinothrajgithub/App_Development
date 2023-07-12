import React from "react";
import { Link } from "react-router-dom";
function Register() {
    return ( 
       <>
       <div className="card">
        <div className="card-split"> 
            <img src="/register.jpg" height={ 500 } />
        </div>
        <div className="card-split right">
            <h1>Register</h1>
            <div className="card-row login">
                <h2 className="id">Name</h2>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" />
            </div>
            <div className="card-row login">
                <h2 className="id">UserName</h2>
                <input type="text" id="user" name="user" placeholder="Enter the Username" />
            </div>
            <div className="card-row login">
                <h2 className="id">Age</h2>
                <input type="integer" id="num" name="name" placeholder="Enter Your Age"/>
            </div>
            <div className="card-row login">
                <h2 className="id">Email</h2>
                <input type="text" id="em" name="em " placeholder="Enter the Email" />
            </div>
            <div className="card-row login">
                <h2 className="id">Password</h2>
                <input type="password" id="txt" name="txt" placeholder="Enter the Password" />
            </div>
            <div className="card-row login">
                <Link to="/login">
                <button className="button">Sign In</button>
                </Link>
            </div>
        </div>
       </div>
       </>
     );
}

export default Register;