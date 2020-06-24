import React, { Component } from "react";
import projectLists from "../utils/projects.json";
import Section from "../components/Section";

class Projects extends Component {
    state = {
        projectLists
    };

    render() {
        return (   

        this.state.projectLists.map(project => (
            <Section
                id={project.id}
                key={project.id}
                name={project.name}
                imageUrl={project.imageUrl}
                depoyedlink={project.deployedLink}
                description={project.description}
            />
        ))

        );
    }
}

export default Projects;