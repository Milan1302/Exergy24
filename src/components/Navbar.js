import React, { useEffect } from 'react'
import $ from 'jquery';
import logo from '../images/timepass image.jpg'
import { Link, Navigate } from 'react-router-dom';

export default function Navibar() {
    
    const navbar = document.getElementsByClassName('navbar');

    // Function to check if the navbar is at the top of the page
    function isNavbarAtTop() {
        return window.scrollY === 0;
    }

    // Function to handle scroll events
    function handleScroll() {
        if (isNavbarAtTop()) {
            navbar[0].classList.add("navbar-on-carousel");
            navbar[0].classList.remove("navbar-off-carousel");
        } else {
            // Navbar is not at the top
            navbar[0].classList.add("navbar-off-carousel");
            navbar[0].classList.remove("navbar-on-carousel");
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-on-carousel" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bootstrap" width="100" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" id='l1'>
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item" id='l2'>
                            <Link className="nav-link" to="/competitions">Competitions</Link>
                        </li>
                        <li className="nav-item" id='l3'>
                            <Link className="nav-link" to="/workshops">Workshops</Link>
                        </li>
                        <li className="nav-item" id='l4'>
                            <Link className="nav-link" to="/talks">Talks</Link>
                        </li>
                        <li className="nav-item" id='l5'>
                            <Link className="nav-link" to="/">Campus Ambassador</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}
