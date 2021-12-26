import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class TimelineLabel extends PureComponent {
  render() {
    const { background, text } = this.props
    return (
      <div className='time-label'>
        <span className={background ? `bg-${background}` : ''}>{text}</span>
      </div>
    )
  }
}
TimelineLabel.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string
}
TimelineLabel.defaultProps = {
  text: '',
  background: ''
}
export default { TimelineLabel }
