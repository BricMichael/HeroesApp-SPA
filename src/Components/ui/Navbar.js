import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark  px-5 bg-primary">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 float">
                <ul className="navbar-nav ml-auto">
                <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link"
                        id='activ' 
                        exact
                        to="/marvel"
                    >
                       MichaelBric
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}