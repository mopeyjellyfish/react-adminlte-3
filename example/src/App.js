import React from 'react'

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
import { DemoLogin } from './Login'

const App = () => {
  return (
    <div>
      <Wrapper>
        <DemoHeader />
        <DemoSidebar />
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
            <DemoSmallBox />
            <DemoInfoBox />
            <DemoCard />
            <DemoTimeline />
            <DemoLogin />
          </PageContent>
        </PageWrapper>
        <DemoAside />
        <DemoFooter />
      </Wrapper>
    </div>
  )
}

export default App
