import React from "react";
import "./style.css";

function About() {
    return (
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="assets/img/portfolio.jpg" className="card-img" alt="" />
                <div className="social">
                    {/* <a className="fab fa-github-square" href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="fab fa-linkedin" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a> */}
                </div>
            </div>
            <div className="col-md-6 center">
                <div className="card-body">
                    <h5 className="card-title">About me</h5>
                    <p className="card-text">I am a designer, developer, and speaker with a passion for technology and challenges in a digital community. I believe that fast-paced, iteractive, holistic web design is the best way to drive product innovation. I merge a vitality for usability and user experience with technical knowledge to create cool digital experiences. I have been seasoned with various front-end and back-end programming languages, responsive frameworks, database and tools for best code practice. I strongly understand the dynamic nature of the field, that is why I update myself in every way possible. My objective is simply to be the best web developer and to contribute all I have to the technology industry.</p>
                    <div className="container-fluid padding">
                    <h5>Currently working on the following languages and frameworks:</h5>
                        <div className="row text-center padding">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <p><i className="fab fa-html5"></i></p>
                                <p> <i className="fab fa-js"></i></p>
                                <p> jQuery</p>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <p><i className="fab fa-bootstrap"></i></p>
                                <p><i className="fab fa-node"></i></p>
                                <p>MySQL</p>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <p><i className="fab fa-css3"></i></p>
                                <p><i className="fab fa-react"></i></p>
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <hr />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default About;