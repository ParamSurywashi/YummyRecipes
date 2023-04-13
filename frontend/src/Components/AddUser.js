import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddUser.css'
function AddUser() {
    const [inputValue, setInputValue] = useState({ username : "", email : "", password:"", conformpassword:""}); 
    const [value, setValue] = useState({});
    const [message, setMessage] = useState("");
  const handleSubmitButton = (event) => { 
    event.preventDefault();

    //console.log(inputValue);
    if(inputValue.password === inputValue.conformpassword){
    fetch('https://yummy-recipe-param.onrender.com/adduser',{
        method: 'post',
        body: JSON.stringify(inputValue),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json())
    .then(data=>{
          console.log(data);
          setValue(data);
          setMessage("Successfully User Added");
          document.getElementById("msg").style.color="green";
          setInputValue({ username : "", email : "", password:"", conformpassword:""});
    })
  }
  }; 
  return (
  <div className="container">
  
   <img className='burger' src='https://cdn.pixabay.com/photo/2012/04/05/00/36/hamburger-25357_960_720.png' />
    <div className="register">
      <h2 id='signH2'>Sign Up</h2>

      <form onSubmit={handleSubmitButton} className="form">

      <div className="form__field" onSubmit={handleSubmitButton}>
          <input type="text" placeholder="Username" value={inputValue.username} onChange={(e)=>setInputValue({...inputValue, username : e.target.value })} required/>
        </div>

        <div className="form__field">
          <input type="email" placeholder="Email Id" value={inputValue.email} onChange={(e)=>setInputValue({...inputValue, email : e.target.value })} required/>
        </div>

        <div className="form__field">
          <input type="password" placeholder="Password" value={inputValue.password} onChange={(e)=>setInputValue({...inputValue, password : e.target.value })}  required/>
        </div>

        <div className="form__field">
          <input type="password" placeholder="Conform Password" value={inputValue.conformpassword} onChange={(e)=>setInputValue({...inputValue, conformpassword : e.target.value })}  required/>
        </div>

        <div className="form__field">
          <button type="submit" id='signUp'>Sign Up </button>
        </div>

      </form>
      <Link to={"/home"} className="guestLog" >Using Guest User</Link>
      <Link to={"/login"} className="account">Already have an accout? Log in</Link>
     <h3 id='msg'>{message}</h3>
    </div>

  </div>
  
  )
}

export default AddUser