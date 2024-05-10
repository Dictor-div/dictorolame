import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import AboutPage from '../pages/AboutPage'
import ServicePage from '../pages/ServicePage'
import PortfolioPage from '../pages/PortfolioPage'
import ContactPage from '../pages/ContactPage'

const MyRoutes = createBrowserRouter([
    {
        path : '/',
        element : <HomePage/>,
        errorElement : <ErrorPage/>
    },
    {
        path : '/about',
        element : <AboutPage/>
    },
    {
        path : '/services',
        element : <ServicePage/>
    },
    {
        path : '/portfolio',
        element : <PortfolioPage/>
    },
    {
        path : '/contact',
        element : <ContactPage/>
    }
])

export default MyRoutes