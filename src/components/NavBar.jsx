import React from 'react'
import Logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import '../pages/main.css'
const NavBar = () => {
    const showNavBar = () => {
        document.body.classList.toggle('navOpen')
    }
    const hedNavBar = () => {
        document.body.classList.remove('navOpen')
    }
  return (
    <section className='container'>
        <nav>
          <div className='logoContainer'>
            <Link className='logoLink' to='/'>
                <img className='logo' src={Logo} alt="Dictor" />
            </Link>
            <button onClick={showNavBar} id='hamburger' className='fas fa-bars'/>
          </div>
          <ul className='NavMenu'>
            <li onClick={hedNavBar}>
                <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to='/'>
                    Home
                </NavLink>
            </li>
            <li onClick={hedNavBar}>
                <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to='/about'>
                    About
                </NavLink>
            </li>
            <li onClick={hedNavBar}>
                <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to='/services'>
                    Services
                </NavLink>
            </li>
            <li onClick={hedNavBar}>
                <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to='/portfolio'>
                    Portfolio
                </NavLink>
            </li>
            <li onClick={hedNavBar}>
                <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to='/contact'>
                    Contact
                </NavLink>
            </li>
          </ul>
        </nav>
    </section>
  )
}

export default NavBar