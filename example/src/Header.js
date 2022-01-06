import React from 'react'
import {
  NavHeader,
  Nav,
  NavToggle,
  NavLink,
  AsideToggle
} from 'react-adminlte-3'
import { Link } from 'react-router-dom'

export function DemoHeader(props) {
  const { dark } = props
  return (
    <NavHeader dark={dark}>
      <Nav>
        <NavToggle />
        <Link to='/'>
          <NavLink>Home</NavLink>
        </Link>
        <Link to='/'>
          <NavLink>Test</NavLink>
        </Link>
        <Link to='/'>
          <NavLink>Example</NavLink>
        </Link>
      </Nav>
      <Nav right={true}>
        <AsideToggle />
      </Nav>
    </NavHeader>
  )
}

export default { DemoHeader }
