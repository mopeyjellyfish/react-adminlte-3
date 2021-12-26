import React from 'react';
import { SidebarWrapper, Sidebar, MainLogo, UserPanel, SidebarNav, SidebarNavItem, SidebarNavTree } from 'react-adminlte-3'
import { faTachometerAlt, faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'

export function DemoSidebar() {
  return (
    <SidebarWrapper>
        <MainLogo href="#" alt="Main Demo Logo" text="Demo Page" image="logo.png"/>
        <Sidebar>
            <UserPanel image="user.jpg" text="Demo User" href="#"/>
            <SidebarNav>
                <SidebarNavItem text="Dashboard" icon={faTachometerAlt}/>
                <SidebarNavItem text="Nested" icon={faCircle}>
                    <SidebarNavTree>
                        <SidebarNavItem text="Item 1" icon={faDotCircle}/>
                        <SidebarNavItem text="Item 2" icon={faDotCircle}/>
                        <SidebarNavItem text="Item 3" icon={faDotCircle}/>
                        <SidebarNavItem text="Item 4" icon={faDotCircle}/>
                    </SidebarNavTree>
                </SidebarNavItem>
            </SidebarNav>
        </Sidebar>
    </SidebarWrapper>
  );
}

export default { DemoSidebar };
