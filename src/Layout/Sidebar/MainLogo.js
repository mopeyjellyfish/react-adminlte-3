import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class MainLogo extends PureComponent {
  render() {
    const { children, href, alt, image, text } = this.props
    return (
      <a href={href} className='brand-link'>
        <img
          src={image}
          alt={alt}
          className='brand-image img-circle elevation-3'
        />
        <span className='brand-text font-weight-light'>{text}</span>
        {children}
      </a>
    )
  }
}
MainLogo.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string
}
MainLogo.defaultProps = {
  children: null,
  href: '',
  image: '',
  text: '',
  alt: ''
}
export default { MainLogo }
