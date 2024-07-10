import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20' >
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5' >
        <div className='flex-1' >
          <NavLink to='/' className='text-sm sm:text-xl logo-block' >
            <span>
              <img src="./img/logo-without-bg.png" className='logo' alt="logo-without-bg" />
            </span>
            <div className="title-logo dark:text-white">DecoBlog</div>
          </NavLink>
          <p className='text-sm mt-5' >This is blog project. You can sign in with your email and password or with Google.</p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              // onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
              // onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
              // onChange={handleChange}
              />
            </div>
            <Button
              // gradientDuoTone='colblueToColyellow'
              className='bg-gradient-to-r from-colblue to-colyellow'
              type='submit'
            // disabled={loading}
            >
              {/* {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )} */}
              Sign Up
            </Button>
            {/* <OAuth /> */}
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <NavLink to='/signin' className='text-blue-500'>
              Sign In
            </NavLink>
          </div>
          {/* {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )} */}
        </div>
      </div>
    </div>
  )
}
