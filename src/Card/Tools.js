import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'

export class CardTool extends PureComponent {
  render() {
    const { maximize, minimize, removable } = this.props
    return (
      <div className='card-tools'>
        {minimize ? (
          <button
            type='button'
            className='btn btn-tool'
            data-card-widget='collapse'
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        ) : null}
        {maximize ? (
          <button
            type='button'
            className='btn btn-tool'
            data-card-widget='maximize'
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
        ) : null}
        {removable ? (
          <button
            type='button'
            className='btn btn-tool'
            data-card-widget='remove'
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        ) : null}
      </div>
    )
  }
}
CardTool.propTypes = {
  maximize: PropTypes.bool,
  minimize: PropTypes.bool,
  removable: PropTypes.bool
}
CardTool.defaultProps = {
  maximize: false,
  minimize: false,
  removable: false
}
export default { CardTool }
