import React from 'react'

import { DemoApp } from './Demo'
import { DemoLogin } from './Login'
import { DemoLock } from './Lock'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<DemoLogin />} />
      <Route path='/lock' element={<DemoLock />} />
      <Route path='/' element={<DemoApp />} />
    </Routes>
  )}

export default App
