import React, { useContext } from 'react';
import { assets } from "../../assets/TShakya";
import './Navbar.css';

const Navbar = () => {
   return (
    <>
        <div className="home">
        <div className="home-top">
          <input type="text" placeholder="Search any keyword" />
          <div className="account">
            <img style={{ width: '25px' }} src={assets.app_icon} alt="apps" />
            <img style={{ width: '25px' }} src={assets.user_icon} alt="user profile" />
          </div>
        </div>
        <div className="home-mid">
        </div>
      </div>
      <div className="conflict-setup" style={{ height: '100px' }}></div>
    </>
   )
}

export default Navbar;