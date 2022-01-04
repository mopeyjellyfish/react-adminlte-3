import React from 'react'
import { Lock } from 'react-adminlte-3'
import { Link } from 'react-router-dom'

export function DemoLock() {
  const header = (
    <h2>
      <Link to='/'>
        <b>Demo</b>
      </Link>{' '}
      Lock
    </h2>
  )
  const footer = (
    <div>
      Copyright ©{' '}
      <Link to='/'>
        <b>Demo</b>
      </Link>{' '}
      Lock
    </div>
  )
  function onSubmit(e) {
      console.log(e)
      return
  }
  function onChange(e) {
      console.log(e)
      return
  }
  return (
    <Lock header={header} footer={footer} name='Demo User' image='user.jpg' onSubmit={onSubmit} onChange={onChange}>
      <div className='help-block text-center'>
        Enter your password to retrieve your session
      </div>
      <div className='text-center'>
      <Link to='/login'>
        Or <b>Sign in</b> as a different user
      </Link>{' '}
      </div>
    </Lock>
  )
}

export default { DemoLock }
