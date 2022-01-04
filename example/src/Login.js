import React from 'react'
import { Login } from 'react-adminlte-3'
import { Link } from 'react-router-dom'

export function DemoLogin() {
  return (
    <div>
      <Login
        header={
          <h2>
            <Link to="/"><b>Demo</b></Link> Login
          </h2>
        }
        message='Sign in to start your session'
      >
        <form action='/' method='post'>
          <div className='input-group mb-3'>
            <input type='email' className='form-control' placeholder='Email' />
            <div className='input-group-append'>
              <div className='input-group-text'>
                <span className='fas fa-envelope'></span>
              </div>
            </div>
          </div>
          <div className='input-group mb-3'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
            />
            <div className='input-group-append'>
              <div className='input-group-text'>
                <span className='fas fa-lock'></span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-8'>
              <input type='checkbox' id='remember' />
              <label>Remember Me</label>
            </div>
            <div className='col-4'>
              <button type='submit' className='btn btn-primary btn-block'>
                Sign In
              </button>
            </div>
          </div>
        </form>
      </Login>
    </div>
  )
}

export default { DemoLogin }
