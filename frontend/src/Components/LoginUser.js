import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { BallTriangle } from  'react-loader-spinner';

import '../styles/LoginUser.css';

function LoginUser() {
    const [loginValue, setloginValue] = useState({email : "", password:""}); 
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  const handleSubmitButton = (event) => { 
    setValue("");
    setMessage("");
    setLoading(false);
    event.preventDefault();
  //  console.log(loginValue);

 //   setloginValue({...loginValue, token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtQGdtYWlsLmNvbSIsImlhdCI6MTY4MDY5MTMzOH0.sg3d6V3UJes7ok9jjym_T3iMvqQ1bDp4msAz7t33r4A"})
  
 fetch('https://yummy-recipe-param.onrender.com/loginuser',{
        method: 'post',
        body: JSON.stringify(loginValue),
        headers:{
            'Content-Type':'application/json',
            'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFtQGdtYWlsLmNvbSIsImlhdCI6MTY4MTAxODg5MH0.eRSjWRnI0hqOJu7KHhU6bU4kOgfMSKteJhl7lAMEKJk'
        }
    }).then(res=>res.json())
    .then(data=>{
          console.log(data);
          
         
         if(data.validate){
          setValue(data.username);
          setMessage("Successfully Login");
          document.getElementById("msg").style.color="green";
            setTimeout(()=>{
              window.localStorage.setItem("yummyrecipeuser", data.username);
              navigate('/home', {state : { user : data.username}});
              // handleUser(data.username);
            },1500)
         }else{
          setMessage("Login failed");
          document.getElementById("msg").style.color="red";
         }
         setLoading(true);
          setloginValue({email : "", password:""});
    })
   
    //console.log(loginValue);
  }; 

  const handleUserGuest = ()=>{
    window.localStorage.setItem("yummyrecipeuser", "Guest");
   }

  return (
  <div className="container">

  <img className='burger' src='https://cdn.pixabay.com/photo/2012/04/05/00/36/hamburger-25357_960_720.png' />
    <div className="login">
      <div className='line'></div>
      <h2 id='logH2'>Login</h2>
      <h1>{value}</h1>
      <form onSubmit={handleSubmitButton} className="form">

        <div className="form__field">
          <input type="email" placeholder="Email Id" value={loginValue.email} onChange={(e)=>setloginValue({...loginValue, email : e.target.value })} required/>
        </div>

        <div className="form__field">
          <input type="password" placeholder="Password" value={loginValue.password} onChange={(e)=>setloginValue({...loginValue, password : e.target.value })}  required/>
        </div>

        <div className="form__field">
          <button type="submit" id='login'>Login </button>
        </div>
         {
          (loading) ? ("") : (<BallTriangle
            height={100}
            width={100}
            radius={4}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={'myLoading'}
            wrapperStyle=""
            visible={true}
          />)
         }
      </form>
      <Link to={"/home"} state={{ user : "Guest"}} className="guestLog" onClick={handleUserGuest} >Using Guest User</Link>
      <Link to={"/adduser"} className="account" >You don't have account? Register Here</Link>
     <h3 id='msg'>{message}</h3>
    </div>

  </div>
  
  )
}

export default LoginUser