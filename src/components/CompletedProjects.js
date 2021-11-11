import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import ProjectCard from './ProjectCard'

const CompletedProjects = () => {

    const {completedProjects} = useContext(GlobalContext)
    return (
        <>
        <h1>Completed Projects</h1>
        <div className="flex-class">
           {completedProjects.map((project) => <ProjectCard key={project.id} project={project} type='completed' />)}
        </div>
        </>
    )
}

export default CompletedProjects
