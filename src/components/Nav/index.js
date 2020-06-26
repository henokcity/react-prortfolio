import React from "react";
import "./style.css";

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
            <a href="projects" className="btn btn-sm">Projects</a>
          </li>
          <li className="nav-item">
            <a href="contact" className="btn btn-sm">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
