import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class CardHeader extends PureComponent {
  render() {
    const { children, title, center } = this.props
    return (
      <div className={`card-header ${center ? 'text-center' : ''}`}>
        {title ? <h3 className='card-title'>{title}</h3> : null}
        {children}
      </div>
    )
  }
}
CardHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  center: PropTypes.bool
}
CardHeader.defaultProps = {
  children: null,
  title: '',
  center: false
}
export default { CardHeader }
