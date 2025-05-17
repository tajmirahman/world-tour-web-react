import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../../assets/logoTravel.avif'
import './Header.css'

const Header = () => {

    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       <NavLink to={'/'}><li><a>Home</a></li></NavLink>
                     {/* <NavLink to={'/categories'}><li><a>Categories</a></li></NavLink> */}
                     <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2 text-black">
                                <NavLink to={'/tour/guid'}><li><a>Tour</a></li></NavLink>
                                <NavLink to={'/tour/details'}><li><a>Tour Details</a></li></NavLink>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Pages</summary>
                            <ul className="p-2 text-black">
                                <NavLink to={'/abouts'}><li><a>About</a></li></NavLink>
                                <NavLink to={'/information'}><li><a>Booking Information</a></li></NavLink>
                            </ul>
                        </details>
                    </li>
                    <NavLink to={'/news'}><li><a>News</a></li></NavLink>
                    </ul>
                </div>
                <Link to={'/'}><img className='w-10 h-10 hidden lg:block' src={logoImage} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white ">
                    <NavLink to={'/'}><li><a>Home</a></li></NavLink>
                    {/* <NavLink to={'/categories'}><li><a>Categories</a></li></NavLink> */}
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2 text-black">
                                <NavLink to={'/tour/guid'}><li><a>Tour</a></li></NavLink>
                                <NavLink to={'/tour/details'}><li><a>Tour Details</a></li></NavLink>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Pages</summary>
                            <ul className="p-2 text-black">
                                <NavLink to={'/abouts'}><li><a>About</a></li></NavLink>
                                <NavLink to={'/information'}><li><a>Booking Information</a></li></NavLink>
                            </ul>
                        </details>
                    </li>
                    <NavLink to={'/news'}><li><a>News</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Header;