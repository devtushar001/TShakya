import React, { useContext, useEffect } from 'react';
import { assets } from "../../assets/TShakya";
import './Navbar.css';
import { TShakyaContext } from '../../Context/TShakya';

const Navbar = () => {
  const { searchQuerry, setSearchQuerry } = useContext(TShakyaContext);

  useEffect(() => {
    console.log(searchQuerry)
  }, [searchQuerry])
  return (
    <>
      <div className="home">
        <div className="home-top">
          <input onChange={(e) => setSearchQuerry(e.target.value)} type="text" placeholder="Search any keyword" />
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