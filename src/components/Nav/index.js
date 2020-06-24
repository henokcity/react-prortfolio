import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <a className="navbar-brand" href="/"><em>Henok Tilahun</em></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://twitter.com" title="Twitter">
              <span className="d-inline d-sm-none">Twitter</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://facebook.com" title="Facebook">
              <span className="d-inline d-sm-none">Facebook</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fab fa-github-square" href="https://www.github.com">
              <span className="d-inline d-md-none">GitHub</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fab fa-linkedin" href="https://www.linkedin.com">
              <span className="d-inline d-md-none">Linkedin</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="projects" className="btn btn-sm">projects</a>
          </li>
          <li className="nav-item">
            <a href="contact" className="btn btn-sm">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
