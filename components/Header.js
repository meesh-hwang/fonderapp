import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/img/fonder-logo.svg';
import androidDownload from '../assets/img/android-download.svg';
import appleDownload from '../assets/img/apple-download.svg';
import '../css/reset.css'
import '../css/main.css'

import { useMediaQuery } from 'react-responsive';



const Header = (active) =>{


    // media queries
    const isXMobile = useMediaQuery({
        query: '(max-width: 575px)' 
    });
    const isMobile = useMediaQuery({
        query: '(min-width: 576px) and (max-width:767px)' 
    });
    const isTablet = useMediaQuery({ 
        query: '(min-width: 768px) and (max-width:991px)' 
    });
    const isLaptop = useMediaQuery({
        query: '(min-width: 992px) and (max-width: 1119px)' 
    });
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    });


    const [nav, toggleNav] = useState(false);

    console.log(nav);
    return(
        <div style={{maxWidth:'100vw'}}>

            {isXMobile && 
                <header className={window.location.pathname !== "/fonderapp/" ? "main-header nav-background": "main-header"}>

                <Link onClick={()=>toggleNav(false)} to="/fonderapp/"><h1><img src={logo} className="main-logo" /></h1></Link>
                <div className={nav ? "nav-toggle open" : "nav-toggle"} onClick={() => !nav ? toggleNav(true) : toggleNav(false)}>
                    <div className="line one"></div>
                    <div className="line two"></div>
                    <div className="line three"></div>
                </div>
                <nav className={nav ? "gb-nav open" : "gb-nav"}>
                    <ul>
                        <li><Link className="nav-link" to="/fonderapp/submission" onClick={()=>toggleNav(false)}>Submission</Link></li>
                        <li><Link className="nav-link" to="/fonderapp/support" onClick={()=>toggleNav(false)}>Support/FAQ</Link></li>
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
            }
            
            {isMobile &&
                <header className={window.location.pathname !== "/fonderapp/" ? "main-header mobile nav-background": "main-header mobile"}>

                <Link onClick={()=>toggleNav(false)} to="/fonderapp/"><h1><img src={logo} className="main-logo mobile" /></h1></Link>
                <div className={nav ? "nav-toggle mobile open" : "nav-toggle mobile"} onClick={() => !nav ? toggleNav(true) : toggleNav(false)}>
                    <div className="line one"></div>
                    <div className="line two"></div>
                    <div className="line three"></div>
                </div>
                <nav className={nav ? "gb-nav mobile open" : "gb-nav mobile"}>
                    <ul>
                        <li><Link className="nav-link" to="/fonderapp/submission" onClick={()=>toggleNav(false)}>Submission</Link></li>
                        <li><Link className="nav-link" to="/fonderapp/support" onClick={()=>toggleNav(false)}>Support/FAQ</Link></li>
                    </ul>
                    <div className='mobileApp mobile'>
                        <h4 className="downloadText mobile">Download the App</h4>
                        <div className='mobileDownloadApp mobile'>
                            <img src={androidDownload}/>
                            <img src={appleDownload}/>
                        </div>

                        <a target="_blank"href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
                    </div>
                </nav>
            </header>
            }

            {isTablet &&
                <header className={window.location.pathname !== "/fonderapp/" ? "main-header nav-background tablet": "main-header tablet"}>

                <Link onClick={()=>toggleNav(false)} to="/fonderapp/"><h1><img src={logo} className="main-logo tablet" /></h1></Link>
                <div className={nav ? "nav-toggle open" : "nav-toggle"} onClick={() => !nav ? toggleNav(true) : toggleNav(false)}>
                    <div className="line one"></div>
                    <div className="line two"></div>
                    <div className="line three"></div>
                </div>
                <nav className={nav ? "gb-nav open tablet" : "gb-nav tablet"}>
                    <ul>
                        <li><Link className="nav-link" to="/fonderapp/submission" onClick={()=>toggleNav(false)}>Submission</Link></li>
                        <li><Link className="nav-link" to="/fonderapp/support" onClick={()=>toggleNav(false)}>Support/FAQ</Link></li>
                    </ul>
                    <div className='mobileApp tablet'>
                        <h4 className="downloadText tablet">Download the App</h4>
                        <div className='mobileDownloadApp tablet'>
                            <img src={androidDownload}/>
                            <img src={appleDownload}/>
                        </div>

                        <a target="_blank"href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
                    </div>
                </nav>
            </header>
            }
            {isLaptop &&
                <header className='main-header nav-background laptop'>
                    <Link to="/fonderapp/"><h1><img src={logo} className="main-logo laptop" /></h1></Link>
                    <nav className='gb-nav laptop'>
                        <ul>
                            <li><Link className="nav-link laptop" to="/fonderapp/support" onClick={()=>toggleNav(false)}>Support/FAQ</Link></li>
                            <li><Link className="nav-link laptop" to="/fonderapp/submission" onClick={()=>toggleNav(false)}>Submission</Link></li>
                        </ul>
                    </nav>
                </header>
            }
            {isDesktop &&
                <header className='main-header nav-background desktop'>
                    <Link to="/fonderapp/"><h1><img src={logo} className="main-logo desktop" /></h1></Link>
                    <nav className='gb-nav desktop'>
                        <ul>
                            <li><Link className="nav-link desktop" to="/fonderapp/support" onClick={()=>toggleNav(false)}>Support/FAQ</Link></li>
                            <li><Link className="nav-link desktop" to="/fonderapp/submission" onClick={()=>toggleNav(false)}>Submission</Link></li>
                        </ul>
                    </nav>
                </header>
            }

            </div>
    )
}
export default Header






