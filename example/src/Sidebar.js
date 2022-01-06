import React from 'react'
import {
  SidebarWrapper,
  Sidebar,
  MainLogo,
  UserPanel,
  SidebarNav,
  SidebarNavItem,
  SidebarNavTree
} from 'react-adminlte-3'
import {
  faTachometerAlt,
  faCircle,
  faDotCircle,
  faUser,
  faUserLock
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export function DemoSidebar() {
  return (
    <SidebarWrapper>
      <Link to='/'>
        <MainLogo
            href='#'
            alt='Main Demo Logo'
            text='Demo Page'
            image='logo.png'
        />
      </Link>
      <Sidebar>
        <Link to='/'>
            <UserPanel image='user.jpg' text='Demo User'/>
        </Link>
        <SidebarNav>
          <SidebarNavItem text='Dashboard' icon={faTachometerAlt} />
          <SidebarNavItem text='Nested' icon={faCircle}>
            <SidebarNavTree>
              <SidebarNavItem text='Item 1' icon={faDotCircle} />
              <SidebarNavItem text='Item 2' icon={faDotCircle} />
              <SidebarNavItem text='Item 3' icon={faDotCircle} />
              <SidebarNavItem text='Item 4' icon={faDotCircle} />
            </SidebarNavTree>
          </SidebarNavItem>
          <SidebarNavItem text='Pages' icon={faCircle}>
            <SidebarNavTree>
              <Link to='/login'>
                <SidebarNavItem text='Login' icon={faUser} />
              </Link>
              <Link to='/lock'>
                <SidebarNavItem text='Lock' icon={faUserLock} />
              </Link>
            </SidebarNavTree>
          </SidebarNavItem>
        </SidebarNav>
      </Sidebar>
    </SidebarWrapper>
  )
}

export default { DemoSidebar }
