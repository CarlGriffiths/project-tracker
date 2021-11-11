import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const {projects} = useContext(GlobalContext)

    return (
        <>
        <h1>Pending Projects</h1>
        <div className="flex-class">
           {projects.map((project) => <ProjectCard key={project.id} project={project} type='projectList' />)}
        </div>
        </>

    )
}

export default Projects
