import React, { useState } from 'react'

import {
  Wrapper,
  PageWrapper,
  PageHeader,
  PageContent,
  Breadcrumb,
  BreadcrumbItem
} from 'react-adminlte-3'
import { DemoFooter } from './Footer'
import { DemoHeader } from './Header'
import { DemoSidebar } from './Sidebar'
import { DemoSmallBox } from './SmallBox'
import { DemoInfoBox } from './InfoBox'
import { DemoAside } from './Aside'
import { DemoCard } from './Card'
import { DemoTimeline } from './Timeline'

import { Link } from 'react-router-dom'

export function DemoApp() {
  const [dark, setDark] = useState(false)
  const [fixedFooter, setFixedFooter] = useState(false)
  const [fixedSidebar, setFixedSidebar] = useState(false)
  const [fixedNavbar, setFixedNavbar] = useState(false)
  const [collapsedSidebar, setCollapsedSidebar] = useState(false)
  const [boxed, setBoxed] = useState(false)
  const setSettings = (
    dark,
    fixedFooter,
    fixedSidebar,
    fixedNavbar,
    collapsedSidebar,
    boxed
  ) => {
    setDark(dark)
    setFixedFooter(fixedFooter)
    setFixedSidebar(fixedSidebar)
    setFixedNavbar(fixedNavbar)
    setCollapsedSidebar(collapsedSidebar)
    setBoxed(boxed)
  }
  return (
    <Wrapper
      dark={dark}
      fixedFooter={fixedFooter}
      fixedSidebar={fixedSidebar}
      fixedNavbar={fixedNavbar}
      collapsedSidebar={collapsedSidebar}
      boxed={boxed}
    >
      <DemoHeader dark={dark} />
      <DemoSidebar />
      <PageWrapper>
        <PageHeader title='Demo Page'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Demo</BreadcrumbItem>
          </Breadcrumb>
        </PageHeader>
        <PageContent>
          <DemoSmallBox />
          <DemoInfoBox />
          <DemoCard />
          <DemoTimeline />
        </PageContent>
      </PageWrapper>
      <DemoAside
        setSettings={setSettings}
        dark={dark}
        fixedFooter={fixedFooter}
        fixedSidebar={fixedSidebar}
        fixedNavbar={fixedNavbar}
        collapsedSidebar={collapsedSidebar}
        boxed={boxed}
      />
      <DemoFooter />
    </Wrapper>
  )
}

export default DemoApp
