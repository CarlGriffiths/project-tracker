import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <header>
        <div>
            <ul className="nav-links">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/add">add project</Link></li>
                <li> <Link to="/completed-projects">completed projects</Link></li>
            </ul>
        </div>
        </header>
    )
}

export default Navigation
