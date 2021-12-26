import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export class TimelineTime extends PureComponent {
  render() {
    const { time } = this.props
    return (
      <span className='time'>
        <FontAwesomeIcon icon={faClock} />
        {time}
      </span>
    )
  }
}
TimelineTime.propTypes = {
  time: PropTypes.string
}
TimelineTime.defaultProps = {
  time: ''
}
export default { TimelineTime }
