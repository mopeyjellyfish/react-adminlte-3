import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class TimelineItemBody extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='timeline-body'>{children}</div>
  }
}
TimelineItemBody.propTypes = {
  children: PropTypes.node
}
TimelineItemBody.defaultProps = {
  children: null
}
export default { TimelineItemBody }
