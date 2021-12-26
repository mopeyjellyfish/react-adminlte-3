import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class CardWrapper extends PureComponent {
  render() {
    const { children, type, outline, background, gradient } = this.props
    const cardType = type ? `card-${type}` : ''
    const backgroundType = background
      ? `bg-${gradient ? 'gradient-' : ''}${background}`
      : ''
    return (
      <div
        className={`card ${
          outline ? 'card-outline' : ''
        } ${cardType} ${backgroundType}`}
      >
        {children}
      </div>
    )
  }
}
CardWrapper.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  background: PropTypes.string,
  outline: PropTypes.bool,
  gradient: PropTypes.bool
}
CardWrapper.defaultProps = {
  children: null,
  type: '',
  background: '',
  outline: false,
  gradient: false
}
export default { CardWrapper }
