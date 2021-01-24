import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './rotating.css'
import {Helmet} from 'react-helmet';
function Navbar() {
    let timing = 2;
  return(
      <>

<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
        <div className="navbar-brand">
            <h1 className="navbar-item " style={{
                WebkitAnimation: `rotating ${timing}s linear infinite`,
                MozAnimation: `rotating ${timing}s linear infinite`,
                OAnimation: `rotating ${timing}s linear infinite`,
                animation: `rotating ${timing}s linear infinite`,
                }}>
                <svg width="40px" height="40px" viewBox="0 0 32 32"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon" fill-rule="nonzero"><circle id="circle" fill="#EAEEF5" cx="16" cy="16" r="16"></circle><circle id="circle_copy" fill="#A9A9A9" cx="16" cy="16" r="11"></circle><circle id="circle_copy_2" fill="#000000" cx="16" cy="16" r="6"></circle><circle id="circle_copy_3" fill="#4B0082	" cx="25" cy="10" r="2"></circle></g></g></svg>
            </h1>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="/">
                    Home
                </a>

                <a className="navbar-item" href="/projects">
                    Projects
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        More
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div className="navbar-end">
                <a id="github-icon"  className="bd-navbar-icon navbar-item" href="https://github.com/baseplate-admin/Django-Archive">
                    <FontAwesomeIcon style={{width:30, height:30}} icon={faGithub} />
                </a>
            </div>
        </div>
    </div>
</nav>
</>
  )
}

export default Navbar;
