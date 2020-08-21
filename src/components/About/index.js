import React from "react";
import "./style.css";

function About() {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src="assets/img/portfolio.jpg" className="card-img" alt="portfolio-pic" />
            </div>
            <div className="col-md-6 center">
                <div className="card-body">
                    <h5 className="card-title">About me</h5>
                    <p className="card-text">I am a designer, developer, and speaker with a passion for technology and challenges in a digital community. I believe that fast-paced, iteractive, holistic web design is the best way to drive product innovation. I merge a vitality for usability and user experience with technical knowledge to create cool digital experiences. I have been seasoned with various front-end and back-end programming languages, responsive frameworks, database and tools for best code practice. I strongly understand the dynamic nature of the field, that is why I update myself in every way possible. My objective is simply to be the best web developer and to contribute all I have to the technology industry.</p>

                    <h5>Technical Skills</h5>
                        <div className="row text-center padding">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div><i className="fab fa-html5"></i><b>HTML5</b></div>
                                <div><i className="fab fa-js"></i><b>Java Script</b></div>
                                <div><i className="icon-jquery"></i><b>Jquery</b></div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div><i className="fab fa-bootstrap"></i><b>Bootstrap</b></div>
                                <div><i className="fab fa-node"></i><b>Node.js</b></div>
                                <div><i className="icon-mysql"></i><b>MySQL</b></div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div><i className="fab fa-css3"></i><b>CSS3</b></div>
                                <div><i className="fab fa-react"></i><b>React</b></div>
                                <div><i className="icon-mongodb"></i><b>MongoDB</b></div>
                            </div>
                        </div>


                </div>
            </div>
        </div>

    );
}

export default About;