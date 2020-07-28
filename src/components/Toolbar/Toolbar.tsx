import React from 'react';
import './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props:any) => (
    <header className="Toolbar">
        
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav> 
    </header>
);

export default Toolbar;