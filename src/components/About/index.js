import React from "react";

function About() {
    return (
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="" class="card-img" />
                <div class="social">
                    <a class="fab fa-github-square" href="https://www.github.com" target="_blank"></a>
                    <a class="fab fa-linkedin" href="https://www.linkedin.com" target="_blank"></a>
                </div>
            </div>
            <div class="col-md-6 center">
                <div class="card-body">
                    <h5 class="card-title">About me</h5>
                    <p class="card-text">Henok Tilahun is a designer, developer, and speaker with a passion for technology,
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