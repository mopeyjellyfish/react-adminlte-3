import React from 'react';
import { NavHeader, Nav, NavToggle, NavLink, AsideToggle } from 'react-adminlte-3'

export function DemoHeader(props) {
  const {dark} = props
  return (
    <NavHeader dark={dark}>
        <Nav>
            <NavToggle/>
            <NavLink href="#home">
                Home
            </NavLink>
            <NavLink href="#test">
                Test
            </NavLink>
            <NavLink  href="#example">
                Example
            </NavLink>
        </Nav>
        <Nav right={true}>
            <AsideToggle />
        </Nav>
    </NavHeader>
  );
}

export default { DemoHeader };
