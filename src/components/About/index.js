/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function About() {
    return (
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="" className="card-img" alt=""/>
                <div className="social">
                    <a className="fab fa-github-square" href="https://www.github.com" target="_blank"></a>
                    <a className="fab fa-linkedin" href="https://www.linkedin.com" target="_blank"></a>
                </div>
            </div>
            <div className="col-md-6 center">
                <div className="card-body">
                    <h5 className="card-title">About me</h5>
                    <p className="card-text">Henok Tilahun is a designer, developer, and speaker with a passion for technology,
                    challenges, and all things design. He believes that fast-paced, iteractive, holistic design is the best
                    way to drive product innovation, and can support that belief with a lot of evidence. He has a desire to
                    work with big companies,non-profits, and upcoming companies alike, and is currently writing this bio while
                    referring to himself in the third person.
                        </p>
                    <h5>Currently working on the following languages and frameworks:</h5>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Java Script</li>
                        <li>J-Query JS Liberary</li>
                        <li>Bootstrap CSS Frameworks</li>
                        <li>Foundation CSS Frameworks</li>
                        <li>Node JS</li>
                    </ul>

                </div>
            </div>
        </div>

    );
}

export default About;