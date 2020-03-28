import React from 'react';
import {FiMessageSquare,MdNotificationsActive} from 'react-icons/all';
import logo from '../assets/james-ndu.jpg';
import './header.css'


function Header(props){
    return(
        <nav className="main_nav">
        <div className="left_nav">
 
        </div>
        <div className="right_nav">
           <FiMessageSquare className="nav_icon"/>
           <MdNotificationsActive className="nav_icon"/>
           <img className="users_logo" src={logo} alt="persons pic"/> 
        </div>
     </nav>
    )

}

export default Header;