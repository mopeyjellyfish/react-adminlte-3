import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class UserPanel extends PureComponent {
  render() {
    const { alt, image, text } = this.props
    return (
      <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
        <div className='image'>
          <img src={image} className='img-circle elevation-2' alt={alt} />
        </div>
        <div className='info'>
          <span className='d-block'>{text}</span>
        </div>
      </div>
    )
  }
}
UserPanel.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string
}
UserPanel.defaultProps = {
  image: '',
  text: '',
  alt: 'User image'
}
export default { UserPanel }
