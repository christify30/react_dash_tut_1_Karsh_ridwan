import React from 'react';
import {TiMessages, GoDashboard, GoRequestChanges, AiOutlineSchedule, FiSettings, GoNote, FaRegUserCircle} from 'react-icons/all';
import '../assets/css/sidebar.css';
import {Link} from 'react-router-dom';
import sidebarLogo from '../assets/img/solab-logo2.png';


function Sidebar(props){
    return(
        <div className="sidebar">
            <div className="navLogo">
                <img className="logo-image" src={sidebarLogo} alt="Solab Technologies"/>
            </div>

            <div className="navLinks">
                <p className="linkTag"> <GoDashboard className="nav_icon"/> <Link className="link" to="/dashboard">Dashboard</Link></p>
                <p className="linkTag"> <GoNote className="nav_icon"/> <Link  className="link" to="/report">Report</Link> </p>
                <p className="linkTag"> <TiMessages className="nav_icon"/> Message</p>
                <p className="linkTag"> <AiOutlineSchedule className="nav_icon"/> Schedule</p>
                <p className="linkTag"> <GoRequestChanges className="nav_icon"/> Request</p>
                <p className="linkTag"> <FaRegUserCircle className="nav_icon"/> Profile</p>
                <p className="linkTag"> <FiSettings className="nav_icon"/> Settings</p>
            </div>
        </div>

    )
}

export default Sidebar;