import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class MainLogo extends PureComponent {
  render() {
    const { children, alt, image, text } = this.props
    return (
      <span className='brand-link'>
        <img
          src={image}
          alt={alt}
          className='brand-image img-circle elevation-3'
        />
        <span className='brand-text font-weight-light'>{text}</span>
        {children}
      </span>
    )
  }
}
MainLogo.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string
}
MainLogo.defaultProps = {
  children: null,
  image: '',
  text: '',
  alt: ''
}
export default { MainLogo }
