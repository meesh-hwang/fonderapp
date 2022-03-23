import {NavLink } from "react-router-dom";

export default function Header(active){
    return(
        <header>
            <div>
            <img src="../assets/icon.png"/>
            <NavLink to="/"><h1>Fonder</h1></NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="support">Support</NavLink></li>
                    <li><NavLink to="submission">Submission</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}