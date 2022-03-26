import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/img/fonder-logo.svg';
import androidDownload from '../assets/img/android-download.svg';
import appleDownload from '../assets/img/apple-download.svg';
import '../css/reset.css'
import '../css/main.css'



const Header = (active) =>{

    const [nav, toggleNav] = useState(false);

    console.log(nav);
    return(
        <header className={window.location.pathname == "/fonderapp/" ? "main-header nav-background": "main-header"}>
            <Link onClick={()=>toggleNav(false)} to="/fonderapp/"><h1><img src={logo} className="main-logo" /></h1></Link>
            <div className={nav ? "nav-toggle open" : "nav-toggle"} onClick={() => !nav ? toggleNav(true) : toggleNav(false)}>
                <div className="line one"></div>
                <div className="line two"></div>
                <div className="line three"></div>
            </div>
            <nav className={nav ? "gb-nav open" : "gb-nav"}>
                <ul>
                    <li><Link className="nav-link" to="/submission" onClick={()=>toggleNav(false)}>Submission</Link></li>
                    <li><Link className="nav-link" to="/support" onClick={()=>toggleNav(false)}>Support/FAQ</Link></li>
                </ul>
                <div className='mobileApp'>
                    <h4 className="downloadText">Download the App</h4>
                    <div className='mobileDownloadApp'>
                        <img src={androidDownload}/>
                        <img src={appleDownload}/>
                    </div>

                    <a target="_blank"href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
                </div>
            </nav>
        </header>
    )
}
export default Header