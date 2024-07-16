import React from 'react'
import { NavLink } from 'react-router-dom'
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterComponent() {

  const style = { color: "#1DA1E5" }

  return (
    <Footer container className='footer border border-t-8 border-[#1DA1E5]'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <NavLink to='/' className='text-sm sm:text-xl logo' >
              <span>
                <img src="./img/logo-without-bg.png" className='logo-img' alt="logo-without-bg" />
              </span>
              <div className="logo-title dark:text-white" >DecoBlog</div>
            </NavLink>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' className='text-colblack' />
              <Footer.LinkGroup col className='text-colblack '>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-colblue'
                >
                  10 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-colblue'
                >
                  Cedrick's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' className='text-colblack' />
              <Footer.LinkGroup col className='text-colblack'>
                <Footer.Link
                  href='https://github.com/CedrickDeco/decoblog'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-colblue'
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href='#'
                  className='hover:text-colblue'
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className='text-colblack' />
              <Footer.LinkGroup col className='text-colblack'>
                <Footer.Link
                  href='#'
                  className='hover:text-colblue'
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href='#'
                  className='hover:text-colblue'
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Cedrick TIAKO"
            year={new Date().getFullYear()}
            className='text-colblack'
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook} style={style} />
            <Footer.Icon href='#' icon={BsInstagram} style={style} />
            <Footer.Icon href='#' icon={BsTwitter} style={style} />
            <Footer.Icon href='https://github.com/sahandghavidel' icon={BsGithub} style={style} />
            <Footer.Icon href='#' icon={BsDribbble} style={style} />

          </div>
        </div>
      </div>
    </Footer>
  )
}
