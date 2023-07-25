import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [Password,setPassword] =useState("");
  const navigate=useNavigate();
  const submitHandler=async(e)=>{
    // axios.post(`http://localhost:8080/post`,data)
e.preventDefault();
try{
  const response=await axios.post('http://localhost:8181/api/v1/auth/register',{name:name,Email:email,password:Password});
       
  if(response.status==200){
    navigate('/login');
    setName('');
    setEmail('');
    setPassword('');
    
  }
}
catch(error){
  console.log("Error: ",error);
}
  }
  
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
                <input type="text" id="name" name="name" placeholder="Enter Your Name"    value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
            </div>
            <div className="card-row login">
                <h2 className="id">Email</h2>
                <input type="text" id="em" name="em " placeholder="Enter the Email"  value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
            </div>
            <div className="card-row login">
                <h2 className="id">Password</h2>
                <input type="password" id="txt" name="txt" placeholder="Enter the Password"   value={Password} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
            </div>
            <div className="card-row login">
                {/* <Link to="/login"> */}
                <button  onClick ={ (e) => {
                  submitHandler(e);
                }}className="button">Sign In</button>
                {/* </Link> */}
            </div>
        </div>
       </div>
       </>
     );
       
    }
          

export default Register;