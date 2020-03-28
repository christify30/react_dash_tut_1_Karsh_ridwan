import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';

function Sidebar(props){
    return(
        <div className="sidebar">
            <p><Link className="link" to="/dashboard">Dashboard</Link></p>
            <p><Link  className="link" to="/wallet">Wallet</Link> </p>
            <p>Profiles</p>
            <p>Settings</p>
        </div>

    )
}

export default Sidebar;