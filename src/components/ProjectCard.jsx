import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const ProjectCard = ({ project, type }) => {

    const { deleteProject, completedProject } = useContext(GlobalContext);

    const extractDate = () => {
        const date = project.time;
        const month = date.getUTCMonth() + 1; //months from 1-12
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();

        return year + "-" + month + "-" + day;
    }

    return (
        <div className="card">
            <h2> {project.title}</h2>
            <p>Date Created: {extractDate()}</p>

            <div><button className="input-button" onClick={() => deleteProject(project.id)}>remove</button></div>
            {type !== 'completed' ?
                (
                    <button className="input-button" onClick={() => completedProject(project)}>completed</button>
                ) : (<button className="input-button" onClick={() => completedProject(project)}>un-complete</button>)}
        </div>

    )
}

export default ProjectCard
