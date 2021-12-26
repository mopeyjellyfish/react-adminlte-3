import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class ProgressBar extends PureComponent {
  render() {
    const { type, percentage } = this.props
    return (
      <div className='progress'>
        <div
          className={`progress-bar ${type ? `bg-${type}` : ''}`}
          style={{ width: percentage + '%' }}
        />
      </div>
    )
  }
}
ProgressBar.propTypes = {
  type: PropTypes.string,
  percentage: PropTypes.number
}
ProgressBar.defaultProps = {
  type: '',
  percentage: 0
}
export default { ProgressBar }
