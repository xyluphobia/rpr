import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/form">Go to Form</Link></li>
                    <li><Link to="/request">Request Information</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;