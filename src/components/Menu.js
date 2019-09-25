import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
    <nav id="menu">
        <h4>Layout examples:</h4>
        <ul>
            <li><Link to="/grid-form">Simple Form</Link></li>
            <li><Link to="/demo-modal">Modal</Link></li>
            <li><Link to="/holy-grail">Holy Grail</Link></li>
        </ul>
    </nav>
);


export default Menu;
