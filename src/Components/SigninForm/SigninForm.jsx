import React from 'react'
import './SigninForm.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const SigninForm = () => {
  return (
    <div className='wrapper'>
    <form action="">
    <h1>Sign in</h1>

    <div className="input-box">
    <input type="email" placeholder='   Email' required />
  <MdEmail className='icon'/>
    </div>

    <div className="input-box">
    <input type="text" placeholder='   UserName' required />
  <FaUser className='icon'/>
    </div>

    <div className="input-box">
    <input type="password" placeholder='   Password' required />
   <FaLock className='icon'/> 
    </div>

    <div className="input-box">
    <input type="password" placeholder='  Confirm Password' required />
    <FaLock className='icon'/>
    </div>

    <div className="input-box">
    <input type="number" placeholder='   Phone Number' required />
    <FaPhoneAlt className='icon'/>
    </div>
    <br></br>
    
    <button type ="submit">Sign in</button>

    <div className="register-link">
    <p><b>Already have an account?  </b><Link to ="/">Log in</Link></p>
    </div>

    </form>
    </div>
  )
}
export default SigninForm;
