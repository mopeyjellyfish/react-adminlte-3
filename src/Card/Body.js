import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class CardBody extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='card-body'>{children}</div>
  }
}
CardBody.propTypes = {
  children: PropTypes.node
}
CardBody.defaultProps = {
  children: null
}
export default { CardBody }
