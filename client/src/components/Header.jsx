import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  return (
    <Navbar className='thenav border-b-2' >
      <NavLink to='/' className='text-sm sm:text-xl logo-block' >
        <span>
          <img src="./img/logo-without-bg.png" className='logo' alt="logo-without-bg" />
        </span>
        <div className="title-logo dark:text-white">DecoBlog</div>
      </NavLink>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10  lg:hidden search-btn' color='yellow' >
        <AiOutlineSearch className='text-sicon text-colblue' />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline search-btn' color='gray' >
          <FaMoon />
        </Button>
        <NavLink>
          <Button className='signin-btn' >
            Sign In
          </Button>
        </NavLink>
        <Navbar.Toggle className='toggle' />
      </div>
      <Navbar.Collapse className='menu'>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          About
        </NavLink>
        <NavLink to="/projects" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Projects
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}
