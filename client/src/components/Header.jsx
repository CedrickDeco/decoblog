import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Navbar className='thenav border-b-2' >
      <NavLink to='/' className='text-sm sm:text-xl logo-block' >
        <span>
          <img src="./img/logo-without-bg.png" className='logo' alt="logo-without-bg" />
        </span>
        <div className="title-logo dark:text-white" >DecoBlog</div>
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
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        {/* <NavLink to='/signin'>
          <Button className='signin-btn' >
            Sign In
          </Button>
        </NavLink> */}
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
