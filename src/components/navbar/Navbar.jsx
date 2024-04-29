import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import profileImg from "../../assets/images/profile_img.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="logo image" className="navbar__logo" />
          <ul className="navbar-list">
            <li className="navbar-list__item">Home</li>
            <li className="navbar-list__item">Tv Shows</li>
            <li className="navbar-list__item">Movies</li>
            <li className="navbar-list__item">New & Popular</li>
            <li className="navbar-list__item">My List</li>
            <li className="navbar-list__item">Browse by Languages</li>
          </ul>
        </div>

        <div className="navbar-right">
          <FaSearch className="icons" />
          <p>Children</p>
          <FaRegBell className="icons" />
          <div className="navbar-profile">
            <img src={profileImg} alt="profile image" className="profile" />
            <IoMdArrowDropdown className="drop-icon" />
            <div className="dropdown">
              <p className="dropdown__title">Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
