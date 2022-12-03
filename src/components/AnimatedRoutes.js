import React from 'react'
import Home from "../pages/Home"
import Experience from "../pages/Experience"
import Projects from "../pages/projects"
import ProjectDisplay from '../pages/ProjectDisplay';
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
function AnimatedRoutes() {

    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='Portfolio_/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='project/:id' element={<ProjectDisplay />} />
                <Route path='/experience' element={<Experience />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes