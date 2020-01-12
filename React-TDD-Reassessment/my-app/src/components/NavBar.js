import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;