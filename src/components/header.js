import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/form">Go to Form</a></li>
                    <li><a href="/request">Request Information</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;