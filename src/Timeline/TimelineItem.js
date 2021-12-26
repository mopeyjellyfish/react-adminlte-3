import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TimelineTime } from './Time'
import { TimelineItemBody } from './Body'
import { TimelineItemHeader } from './Header'

export class TimelineItem extends PureComponent {
  render() {
    const { children, time, title, icon, background } = this.props
    return (
      <div>
        <FontAwesomeIcon
          icon={icon}
          className={background ? `bg-${background}` : ''}
        />
        <div className='timeline-item'>
          <TimelineTime time={time} />
          <TimelineItemHeader>{title}</TimelineItemHeader>
          <TimelineItemBody>{children}</TimelineItemBody>
        </div>
      </div>
    )
  }
}
TimelineItem.propTypes = {
  children: PropTypes.node,
  time: PropTypes.string,
  title: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object
}
TimelineItem.defaultProps = {
  children: null,
  time: '',
  title: '',
  background: '',
  icon: null
}
export default { TimelineItem }
