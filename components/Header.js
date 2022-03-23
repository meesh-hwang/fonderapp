import {Link } from "react-router-dom";

export default function Header(active){
    return(
        <header>
            <div>
            <img src="../assets/icon.png"/>
            <Link to="/fonderapp"><h1>Fonder</h1></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/fonderapp/support">Support</Link></li>
                    <li><Link to="submission">Submission</Link></li>
                </ul>
            </nav>
        </header>
    );
}