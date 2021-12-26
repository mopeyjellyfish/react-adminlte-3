import React, { PureComponent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

export class Loading extends PureComponent {
  render() {
    return (
      <div className='overlay'>
        <FontAwesomeIcon spin icon={faSync} size='2x' />
      </div>
    )
  }
}

export default { Loading }
