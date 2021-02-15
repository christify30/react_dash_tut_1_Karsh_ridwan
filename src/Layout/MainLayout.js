import React from 'react';
import Header from './header'
import Sidebar from './sideBar'
import Footer from './Footer'
import '../assets/css/mainlayout.css'


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
            <Footer />
        </section>
    )
}

export default MainLayout