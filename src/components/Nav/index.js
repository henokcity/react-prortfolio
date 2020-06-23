/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <a class="navbar-brand" href="/"><em>Henok Tilahun</em></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com" title="Twitter" target="_blank">
              <span class="d-inline d-sm-none">Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://facebook.com" title="Facebook" target="_blank">
              <span class="d-inline d-sm-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link fab fa-github-square" href="https://www.github.com" target="_blank">
              <span class="d-inline d-md-none">GitHub</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link fab fa-linkedin" href="https://www.linkedin.com" target="_blank">
              <span class="d-inline d-md-none">Linkedin</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="projects" class="btn btn-sm">projects</a>
          </li>
          <li class="nav-item">
            <a href="contact" class="btn btn-sm">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
