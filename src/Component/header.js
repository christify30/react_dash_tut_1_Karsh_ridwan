import React from 'react';
import {MdMessage,AiFillNotification} from 'react-icons/all';
import logo from '../assets/img/profile.jpg';
import '../assets/css/header.css';


function Header(props){
    return(
        <nav className="main_nav">
        <div className="left_nav">
 
        </div>
        <div className="right_nav">
           <MdMessage className="nav_icon1"/>
           <AiFillNotification className="nav_icon1"/>
           <img className="users_logo" src={logo} alt="persons pic"/>
        </div>
     </nav>
    )

}

export default Header;