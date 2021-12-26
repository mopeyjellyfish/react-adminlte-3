import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Loading } from '../Effects/Loading'

export class SmallBox extends PureComponent {
  render() {
    const { children, title, href, type, icon, loading } = this.props
    return (
      <div className={`small-box bg-${type}`}>
        <div className='inner'>
          <h3>{title}</h3>
          {children}
        </div>
        <div className='icon'>
          <FontAwesomeIcon icon={icon} />
        </div>
        <a href={href} className='small-box-footer'>
          More info <FontAwesomeIcon icon={faArrowCircleRight} />
        </a>
        {loading ? <Loading /> : null}
      </div>
    )
  }
}
SmallBox.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object,
  loading: PropTypes.bool
}
SmallBox.defaultProps = {
  children: null,
  title: '',
  href: '#',
  type: 'info',
  icon: null,
  loading: false
}
export default { SmallBox }
