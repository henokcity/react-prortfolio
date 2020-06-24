import React from "react";

function Footer() {
    return (
        <footer>
            <nav className="navbar navbar-dark">
                <div className="col-12 text-center">
                    <a className="nav-link fab fa-github-square" href="https://www.github.com">
                        <span className="d-inline d-md-none">GitHub</span>
                    </a>
                    <a className="nav-link fab fa-linkedin" href="https://www.linkedin.com">
                        <span className="d-inline d-md-none">Linkedin</span>
                    </a>
                </div>
                <small>&copy;henokcity</small>
            </nav>
        </footer>

    );
}

export default Footer;