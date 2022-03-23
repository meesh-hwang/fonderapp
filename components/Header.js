import {HashLink } from "react-router-dom";

export default function Header(active){
    return(
        <header>
            <div>
            <img src="../assets/icon.png"/>
            <HashLink to="/"><h1>Fonder</h1></HashLink>
            </div>
            <nav>
                <ul>
                    <li><HashLink to="support">Support</HashLink></li>
                    <li><HashLink to="submission">Submission</HashLink></li>
                </ul>
            </nav>
        </header>
    );
}