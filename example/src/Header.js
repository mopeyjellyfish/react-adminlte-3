import React from 'react';
import { NavHeader, Nav, NavToggle, NavLink, AsideToggle } from 'react-adminlte-3'

export function DemoHeader() {
  return (
    <NavHeader>
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
