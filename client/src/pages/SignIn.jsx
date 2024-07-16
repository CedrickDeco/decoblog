import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

export default function SignIn() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() }); // la methode trim() c'est pour ne pas avoir les espace avant les premier mots saisies dans les champs
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }


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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              // gradientDuoTone='colblueToColyellow'
              className='bg-gradient-to-r from-colblue to-colyellow'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                ''
              )}
              Sign In
            </Button>
            {/* <OAuth /> */}
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <NavLink to='/signup' className='text-colblue'>
              Sign Up
            </NavLink>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}
