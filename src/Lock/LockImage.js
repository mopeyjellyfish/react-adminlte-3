import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LockImage extends PureComponent {
  render() {
    const { image } = this.props
    return (
      <div className='lockscreen-image'>
        <img src={image} alt='User Image' />
      </div>
    )
  }
}
LockImage.propTypes = {
  image: PropTypes.string
}
LockImage.defaultProps = {
  image: null
}
export default { LockImage }
