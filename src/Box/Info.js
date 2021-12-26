import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Loading } from '../Effects/Loading'
export class InfoBox extends PureComponent {
  render() {
    const {
      children,
      title,
      iconBackgroundType,
      backgroundType,
      icon,
      message,
      loading
    } = this.props
    return (
      <div
        className={`info-box ${backgroundType ? `bg-${backgroundType}` : ''} `}
      >
        <span
          className={`info-box-icon ${
            iconBackgroundType ? `bg-${iconBackgroundType}` : ''
          } `}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
        <div className='info-box-content'>
          <span className='info-box-text'>{title}</span>
          <span className='info-box-number'>{message}</span>
          {children}
        </div>
        {loading ? <Loading /> : null}
      </div>
    )
  }
}
InfoBox.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string,
  iconBackgroundType: PropTypes.string,
  backgroundType: PropTypes.string,
  icon: PropTypes.object,
  loading: PropTypes.bool
}
InfoBox.defaultProps = {
  children: null,
  title: '',
  message: '',
  backgroundType: '',
  iconBackgroundType: '',
  icon: null,
  loading: false
}
export default { InfoBox }
