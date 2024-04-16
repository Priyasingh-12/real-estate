import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import { TfiAlignJustify } from "react-icons/tfi";
import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { TfiClose } from "react-icons/tfi";
import { UserContext } from '../context/UserContext';
import { useRef } from 'react';

import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const {userInfo, setUserInfo} = React.useContext(UserContext)

  const bodyRef = useRef(document.body);

  const logoutUser = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  }

  useEffect(()=>{
    if(darkMode){
      bodyRef.current.classList.add('dark-mode');
      
    } else {
      bodyRef.current.classList.remove('dark-mode');
    }
  }, [darkMode])

  return (
    <header className= {`header ${darkMode ? 'dark-mode' : ''}` }>
      <div className="header-container ">
        <div className="navbar-sm" id="left">
          <img
            src={logo}
            className="nav-logo"
            alt="my home"
            height="60px"
            width="150px"
          />
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <TfiClose /> : <TfiAlignJustify />}
          </button>
        </div>
        <nav className={toggle ? "showNav" : "hideNav"}>
          <ul>
          <li><a href="/Home">Home</a></li>
            <li><a href="/">Sell</a></li>
            <li><a href="/">Buy</a></li>
            <li><a href="/">Rent</a></li>
            <li><a href="/">Mortgage</a></li>
            <li><a href="/">Agent</a></li>
            <li><a href="/">360° tour</a></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <div className="dark-mode-toggle">
            <button onClick={handleDarkModeToggle}>
              {darkMode ? <LightModeOutlinedIcon /> : <DarkModeTwoToneIcon />}
            </button>
          </div>

          <div className="header-right-login">
            {userInfo ? (
              <>
                <Link to="/create-ad">List My Property</Link>
                <Link to="/profile">Profile</Link>
                <Link onClick={logoutUser}>Logout</Link>
              </>
            ) : (
              <>
                <Link to="/Login">Login</Link>
                <Link to="/Login">Signup</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
