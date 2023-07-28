import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    // Basic validation checks on email and password
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
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
        const response = await axios.post('http://localhost:8181/api/v1/auth/register', { email: email, password: password });

        navigate('/');
        let token = response.data.token;
        let user = response.data.userResponse;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.error('Error: ', error);
        setErrorMessage('Password is Incorrect');
      }
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-split">
          <img src="/Login.jpg" height={250} alt="Login" />
        </div>
        <div className="card-split right">
          <h1>Login</h1>
          <div className="card-row login">
            <h3>Email</h3>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter the email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="card-row login">
            <h3>Password</h3>
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="error">{errorMessage}</p>
          <div className="card-row login">
            <button className="button" onClick={submitHandler}>Log In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
