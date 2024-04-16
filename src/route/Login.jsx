import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import './style.css' //

function Login () {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className={`containers ${isSignUp ? 'active' : ''} `}>
      <div className='form-container sign-up'>
        <form>
          <h1>Create Account</h1>
          <div className='social-icons'>
            <a href='/' className='social-icon'>
              <FaFacebook className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaTwitter className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaGoogle className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaLinkedin className='my-auto mx-auto' />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
        </form>
      </div>
      <div className='form-container sign-in'>
        <form>
          <h1>Sign In</h1>
          <div className='social-icons'>
          <a href='/' className='social-icon'>
              <FaFacebook className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaTwitter className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaGoogle className='my-auto mx-auto' />
            </a>
            <a href='/' className='social-icon'>
              <FaLinkedin className='my-auto mx-auto' />
            </a>
          </div>
          <span>or use your email password</span>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <a href='/'>Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className='toggle-container'>
        <div className='toggle'>
          <div className='toggle-panel toggle-left'>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className='hidden' onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className='hidden' onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
