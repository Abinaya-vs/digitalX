import React from 'react'
import './LoginForm.css'
import { FaUserCheck } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'
const LoginForm = () => {
  return (
    <div className='wrapper'>
    <form action="">
    <h1>Login</h1>

    <div className="input-box">
    <input type="text" placeholder='   UserName' required />
    <FaUserCheck className='icon'/>
    </div>

    <div className="input-box">
    <input type="password" placeholder='   Password' required />
    <FaLock className='icon'/>
    </div>
    <br></br>

    <div className="remember-forgot">
    <lable><input type="checkbox" />Save Password </lable>
    <a href="#">Forget password?</a>
    </div>
    
    <button type ="submit">Login</button>
    <br></br><br></br>


    <div className ="register-link">
    <p><b>Dont have a account?</b> <Link className='link' to ="SigninForm">Sign in</Link></p>
    </div>

    </form> 
    </div>
  )
}

export default LoginForm;
