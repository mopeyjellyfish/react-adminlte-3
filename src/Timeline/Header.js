import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class TimelineItemHeader extends PureComponent {
  render() {
    const { children } = this.props
    return <h3 className='timeline-header'>{children}</h3>
  }
}
TimelineItemHeader.propTypes = {
  children: PropTypes.node
}
TimelineItemHeader.defaultProps = {
  children: null
}
export default { TimelineItemHeader }
