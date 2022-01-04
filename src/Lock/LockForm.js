import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function LockForm(props) {
  const { onSubmit, onChange } = props
  return (
    <form className='lockscreen-credentials' onSubmit={onSubmit}>
      <div className='input-group'>
        <input
          type='password'
          className='form-control'
          placeholder='password'
          onChange={onChange}
        />
        <div className='input-group-append'>
          <button type='button' className='btn' onClick={onSubmit}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </form>
  )
}
LockForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
LockForm.defaultProps = {
  onChange: null,
  onSubmit: null
}
export default { LockForm }
