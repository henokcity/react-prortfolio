/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Footer() {
    return (
        <footer>
            <nav class="navbar navbar-dark">
                <div class="col-12 text-center">
                    <a class="nav-link fab fa-github-square" href="https://www.github.com" target="_blank">
                        <span class="d-inline d-md-none">GitHub</span>
                    </a>
                    <a class="nav-link fab fa-linkedin" href="https://www.linkedin.com" target="_blank">
                        <span class="d-inline d-md-none">Linkedin</span>
                    </a>
                </div>
                <small>&copy;henokcity</small>
            </nav>
        </footer>

    );
}

export default Footer;