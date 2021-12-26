# react-adminlte-3

> React AdminLTE components

[![NPM](https://img.shields.io/npm/v/react-adminlte-3.svg)](https://www.npmjs.com/package/react-adminlte-3) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-adminlte-3
```

## Usage

```jsx
import React from 'react'

import {
  Wrapper,
  PageWrapper,
  PageHeader,
  PageContent,
  Breadcrumb,
  BreadcrumbItem,
  NavHeader,
  Nav,
  NavToggle,
  NavLink,
  AsideToggle,
  SidebarWrapper,
  MainLogo,
  Sidebar,
  UserPanel,
  SidebarNav,
  SidebarNavItem,
  SidebarNavTree,
  PageWrapper,
  PageHeader,
  Breadcrumb,
  BreadcrumbItem,

} from 'react-adminlte-3'

const App = () => {
  return (
      <Wrapper>        
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
        <PageWrapper>
          <PageHeader title='Demo Page'>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Demo</BreadcrumbItem>
            </Breadcrumb>
          </PageHeader>
          <PageContent>

          </PageContent>
        </PageWrapper>
          <Footer>
            <div className="float-right d-none d-sm-block">
              <b>
        Version
              </b>
              {' '}
        0.0.1
            </div>
            <strong>
              <span>
        &copy; Copyright
                {' '}
                {(new Date().getFullYear())}
                {' '}
        Company Name
              </span>
            </strong>
          </Footer>
      </Wrapper>
  )
}

export default App

```
## Example

An example of the components can be [found here](https://mopeyjellyfish.github.io/react-adminlte-3/) built from the [`example`](./example) directory.
## License

MIT © [mopeyjellyfish](https://github.com/mopeyjellyfish)
