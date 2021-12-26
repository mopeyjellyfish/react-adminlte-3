import React from 'react'
import { Timeline, TimelineItem } from 'react-adminlte-3'
import { faEnvelope, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

export const DemoTimeline = () => (
  <div className='row'>
    <Timeline start="01 Jan 2022" background="dark">
      <TimelineItem title="Message Received" time="10:03" icon={faEnvelope} background="blue">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel fermentum turpis. Nunc lobortis, lacus vitae mollis fringilla, leo massa tincidunt augue, eget rutrum nisl risus nec sapien. Donec iaculis molestie dolor, in varius tortor tincidunt in. Donec gravida dignissim ipsum, at commodo sapien tempus ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas id vestibulum velit. Aliquam a sapien semper, facilisis neque quis, suscipit leo. </p>
      </TimelineItem>
      <TimelineItem title="New transactions" time="12:03" icon={faMoneyBill} background="green">
        <Timeline start="12:03.01" background="dark">
            <TimelineItem title="Begin" time="12:03.02" icon={faMoneyBill} background="blue">
              <p>List of items</p>
            </TimelineItem>
            <TimelineItem title="Settle" time="12:04.76" icon={faMoneyBill} background="blue">
              <p>Response for settling</p>
            </TimelineItem>
            <TimelineItem title="Finished" time="12:05.56" icon={faMoneyBill} background="blue">
            <p>Dispatched x y z</p>
            </TimelineItem>
        </Timeline>
      </TimelineItem>
    </Timeline>
    </div>
)

export default { DemoTimeline }
