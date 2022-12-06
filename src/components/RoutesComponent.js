import React from 'react'
import Home from "../pages/Home"
import Experience from "../pages/Experience"
import Projects from "../pages/projects"
import ProjectDisplay from '../pages/ProjectDisplay';
import { Route, Routes } from "react-router-dom"

function RoutesComponent() {

    return (
            <Routes>
                <Route path='Portfolio_/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='project/:id' element={<ProjectDisplay />} />
                <Route path='/experience' element={<Experience />} />
            </Routes>
    )
}

export default RoutesComponent