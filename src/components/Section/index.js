import React from "react";

function Section(props) {
    return (
        <section>
            <div className="container my-5 pt-4">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-4 mb-4 pr-md-5">
                        <h2>{props.name}</h2>
                        <br></br>
                        <p>{props.description}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row tiles">
                            <a href={props.deployedLink} ><img src={props.imageUrl} className="card-img-top" alt={props.name} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;