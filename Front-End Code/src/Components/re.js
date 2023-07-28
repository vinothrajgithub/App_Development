import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
        setErrorMessage("Please fill in all fields.");
        return false;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        setErrorMessage("Please enter a valid email address.");
        return false;
      }
  
      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters long.");
        return false;
      }
  
      setErrorMessage("");
      return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
          name: name,
          email: email,
          password: password
        });

        if (response.status === 200) {
          navigate('/login');
        }
      } catch (error) {
        console.error("Error: ", error);
        setErrorMessage("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="card">
       <div className="card-split">
          <img src="/register.jpg" height={500} alt="Register" />
        </div>
        <div className="card-split right">
        <h1>Register</h1>
          <div className="card-row login">
            <h2 className="id">Name</h2>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="card-row login">
          <h2 className="id">Email</h2>
            <input
              type="text"
              id="em"
              name="em"
              placeholder="Enter the Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="card-row login">
            <h2 className="id">Password</h2>
            <input
              type="password"
              id="txt"
              name="txt"
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="error">{errorMessage}</p>
          <div className="card-row login">
            <button onClick={submitHandler} className="button">Sign In</button>
          </div>
          <div className="card-row login">
            <Link to="/login">Already have an account? Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
