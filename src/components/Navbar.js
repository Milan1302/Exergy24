import React from 'react'
import logo from '../images/timepass image.jpg'

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
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Competitions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Workshops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Talks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Campus Ambassador</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}
