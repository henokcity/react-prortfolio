import React from "react";
import { FormBtn } from "../components/Form";

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="resume" src="assets/img/resume.PNG" alt="resume"></img>
                    <a href="https://docs.google.com/document/d/1qVRYtOzqe7kSTfaMgMAEzNN9SS9mOSn4Yn5JDv8jUws/edit?usp=sharing"><FormBtn>Download resume</FormBtn></a>
                </div>
                <div className="col-md-6 contact-info">
                    <div><a href="mailto:henokcity@gmail.com"><i class="fas fa-envelope"></i>henokcity@gmail.com</a></div>
                    <a className="nav-link fab fa-github-square" href="https://www.github.com/henokcity">
                        <span className="d-inline d-md-none">GitHub</span>
                    </a>
                    <a className="nav-link fab fa-linkedin" href="https://www.linkedin.com/in/henoktilahun">
                        <span className="d-inline d-md-none">Linkedin</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;