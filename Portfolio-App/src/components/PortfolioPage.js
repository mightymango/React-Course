import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => (
        <div>
            <h2>My Work</h2>
            <p>Checkout the stuff I've done.</p>
            <ol>
                <li><Link to="/portfolio/1">Portfolio 1</Link></li>
                <li><Link to="/portfolio/2">Portfolio 2</Link></li>
            </ol>
        </div>
    );


export default PortfolioPage;