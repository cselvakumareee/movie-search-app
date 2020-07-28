import React from 'react';
import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const NavigationItems = (props:any) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/favourites">Favourites</NavigationItem>
    </ul>
);

export default NavigationItems;