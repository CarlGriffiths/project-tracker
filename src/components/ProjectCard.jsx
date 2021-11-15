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

        const dateCompleted = new Date();
        const timeToCompleteInMins = timeToComplete(project, dateCompleted)

        //could do
        //project.dateCompleted = new Date() etc
        //instead make immutable

        let projectToReturn = { 
            ...project, 
            dateCompleted: dateCompleted,
            timeToCompleteInMins: timeToCompleteInMins
        }
    
        completedProject(projectToReturn)
    }

    const timeToComplete = (project, dateCompleted) => {

        //get the completion time in mins
        const timeInMilSec = Math.abs(dateCompleted - project.time)
        //then get it in mins
        const timeInMin = Math.floor((timeInMilSec / 1000) / 60);

        return timeInMin;

    }

    return (
        <div className="card">
            <h2> {project.title}</h2>
            {type !== 'completed' ? (<p>Date Created: {extractDate()}</p>) 
            : (<p>Time taken to complete: {project.timeToCompleteInMins} (mins)</p>)}


            <div><button className="input-button" onClick={() => deleteProject(project.id)}>remove</button></div>
            {type !== 'completed' ?
                (
                    <button className="input-button" onClick={() => completeProject(project)}>completed</button>
                ) : (<button className="input-button" onClick={() => unCompleteProject(project)}>un-complete</button>)}
        </div>

    )
}

export default ProjectCard
