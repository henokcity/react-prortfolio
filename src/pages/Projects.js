import React, { Fragment } from "react";
import projectLists from "../utils/projects.json";
import Section from "../components/Section";
import Footer from "../components/Footer";



function projects() {
    return (
        <Fragment>
            {projectLists.map(project => (
                <Section
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    imageUrl={project.imageUrl}
                    deployedLink={project.deployedLink}
                    githubRepo={project.githubRepo}
                    description={project.description}
                />

            ))}
            <Footer />
        </Fragment>
    );

};




export default projects;