import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './NavBar.css'


const NavBar = () => {
  const [menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
      <div className="logo">
        <img className='logo' src={assets.logo} alt="" />
      </div>
      <div className="menu-items">
        <ul>
            <li onClick={()=>setMenu('home')} className={menu==="home"?"active": ""}>home</li>
            <li onClick={()=>setMenu('menu')} className={menu==="menu"?"active": ""}>menu</li>
            <li onClick={()=>setMenu('mobile')} className={menu==="mobile"?"active": ""}>mobile app</li>
            <li onClick={()=>setMenu('contact')} className={menu==="contact"?"active": ""}>contact us</li>
        </ul>
      </div>
      <div className="navbar-left">
        <div className="navbar-search">
            <img src={assets.search_icon} alt="" />
        </div>
        <div className="navbar-cart">
            <img src={assets.basket_icon} alt="" />
        </div>
        <button className='navbar-btn'>sign in</button>
      </div>
    </div>
  )
}

export default NavBar