import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { TimelineLabel } from './Label'
export class Timeline extends PureComponent {
  render() {
    const { children, background, start } = this.props
    return (
      <div className='timeline'>
        <TimelineLabel background={background} text={start} />
        {children}
        <div>
          <FontAwesomeIcon icon={faClock} className='bg-gray' />
        </div>
      </div>
    )
  }
}
Timeline.propTypes = {
  children: PropTypes.node,
  start: PropTypes.string,
  background: PropTypes.string
}
Timeline.defaultProps = {
  children: null,
  start: '',
  background: ''
}
export default { Timeline }
