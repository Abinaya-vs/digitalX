import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/About us/Aboutus';
import LoginForm from './Components/LoginForm/LoginForm';
import Navbar from './Components/Navbar/Navbar';
import SigninForm from './Components/SigninForm/SigninForm';
import HomePage from './Components/HomePage/HomePage';
function App() {
  const current_theme=localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme:'light');

  useEffect(()=>{
localStorage.setItem('current_theme',theme);
  },[theme])
  return (
    <div>
    <div className={`container ${theme}`}>
    <BrowserRouter>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path='/SigninForm' element={<SigninForm />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/HomePage' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>


    <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>Account</h4>
            <a ><p>Profile</p>
            </a>
            <a href="/healthplan">
                <p></p>
            </a>
            <a href="/individual">
                <p></p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
                <p>Resource center</p>
            </a>
            <a href="/healthplan">
                <p>Testimonials</p>
            </a>
            <a href="/individual">
                <p>STV</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
                <p>Swing Tech</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
                <p>About</p>
            </a>
            <a href="/press">
                <p>Press</p>
            </a>
            <a href="/career">
                <p>Career</p>
                </a>
            <a href="/contact">
                <p>Contact</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            
          </div>
         
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
        <a href="/privacy"><div><p>Privacy</p></div></a>
        <a href="/security"><div><p>Security</p></div></a>
        <a href="/cookie"><div><p>Cookie  Declaration</p></div></a>
    </div>
</div>
        </div>
</div>

    </div>
  );
}

export default App;
