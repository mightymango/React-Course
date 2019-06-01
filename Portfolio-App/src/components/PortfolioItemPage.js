import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItemPage = (props) => (
    <div>
        <h3>A thing I've done.</h3>
        <p>This page is for the item with id of {props.match.params.id}.</p>
    </div>        
);


export default PortfolioItemPage;