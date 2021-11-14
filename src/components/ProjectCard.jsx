import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const ProjectCard = ({ project, type }) => {

    const { deleteProject, completedProject, unCompleteProject } = useContext(GlobalContext);

    const extractDate = () => {
        const date = project.time;
        const month = date.getUTCMonth() + 1; //months from 1-12
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        return year + "-" + month + "-" + day;
    }

    const completeProject = (project) => {

        //could do
        //project.dateCompleted = new Date()
        //instead make immutable
        let projectToReturn = { ...project, dateCompleted: new Date() }
        projectToReturn = { ...projectToReturn, timeToCompleteInMins: timeToComplete(projectToReturn) }

        completedProject(projectToReturn)
    }

    const timeToComplete = (projectToReturn) => {

        const timeInMilSec = Math.abs(projectToReturn.dateCompleted - projectToReturn.time)
        const timeInMin = Math.floor((timeInMilSec / 1000) / 60);

        return timeInMin;

    }

    return (
        <div className="card">
            <h2> {project.title}</h2>
            {type !== 'completed' ? (<p>Date Created: {extractDate()}</p>) : (<p>Time taken to complete: {project.timeToCompleteInMins} (mins)</p>)}


            <div><button className="input-button" onClick={() => deleteProject(project.id)}>remove</button></div>
            {type !== 'completed' ?
                (
                    <button className="input-button" onClick={() => completeProject(project)}>completed</button>
                ) : (<button className="input-button" onClick={() => unCompleteProject(project)}>un-complete</button>)}
        </div>

    )
}

export default ProjectCard
