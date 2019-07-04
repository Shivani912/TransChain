import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Transchain</Link>
                <ul className="right">
                    <li>
                        <NavLink to='/institute'>Institution</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar