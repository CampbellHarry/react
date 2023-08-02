import './index.css';
import ReactDOM from 'react-dom'
import React from 'react';
import Password from 'react-better-password';


export function Header() {
  return (
    <header>
      <h2>Welcome to my first React project</h2>
    </header>
  );
}

export default function Box(){
  
  return (
    <div className='container'>
          <div className="box" style={{borderRadius: "20px"}}>
            <h1><u>Login</u></h1>
            <div className='Logbox'>
              <div className='inputhol'>
                <input name="name" placeholder='Enter your name.'></input>
                <Password className='my-class' id='password' placeholder='Enter your password' />
                <input name="dob" placeholder='Enter your dob.'></input>

              </div>
              <div className='bhold'>
              <button style={{ backgroundcolor: "white", color: "black", borderRadius: "10px", height: "50px", width:"300px", borderWidth: "5px", borderColor: "blue", cursor:"pointer"}}>Login</button>
              </div>
            </div>
          </div>
    </div>
  );
}