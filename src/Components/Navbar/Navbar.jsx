import React from 'react'
import './Navbar.css'
import search_icon_light from '../../Components/Assets/search-w.png'
import search_icon_dark from '../../Components/Assets/search-b.png'
import toogle_light from '../../Components/Assets/night.png'
import toogle_dark from '../../Components/Assets/day.png'
import { Link } from 'react-router-dom';
const Navbar = ({theme,setTheme}) => {
const toogle_mode=()=>{
  theme =='light' ? setTheme('dark') : setTheme('light')
}

  return (
    <div className='navbar'>
      <ul>
      <li className='li'><Link className='link' to ={'./HomePage'}><b>Home</b></Link></li>
      <li className='li'><Link className='link' to={'/'}><b>Login</b></Link></li>
      <li className='li'><Link className='link' to={'./SigninForm'}><b>Signin</b></Link></li>
      <li className='li'><Link className='link' to={'./Aboutus'}><b>About</b></Link></li>
      <li className='li'><Link className='link' to={'./Aboutus'}><b>Products</b></Link></li>
      <li className='li'><Link className='link' to={'./Aboutus'}><b>Features</b></Link></li>
      </ul>
      <div className='search-box'>
      <input type="text" placeholder='Search'/>
      <img src={theme =='light' ? search_icon_light : search_icon_dark} alt=""/>
      </div>
      <img onClick={()=>{toogle_mode()}} src={theme =='light' ? toogle_light : toogle_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar;
