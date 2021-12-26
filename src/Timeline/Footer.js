import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export class TimelineItemFooter extends PureComponent {
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
TimelineItemFooter.propTypes = {
  time: PropTypes.string
}
TimelineItemFooter.defaultProps = {
  time: ''
}
export default { TimelineItemFooter }
