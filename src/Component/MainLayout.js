import React from 'react';
import Header from './header';
import Sidebar from './sideBar';
import './mainlayout.css';
import './content.css';

function MainLayout(props){
    return(
        <section style={{overflow:"hidden",height:"100vh"}}>
            <Header/>
            <div className="layout">
              <Sidebar/>
              <div className="content">
                  {props.children}
              </div>
            </div>
        </section>
    )
}

export default MainLayout;