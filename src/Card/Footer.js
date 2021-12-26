import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class CardFooter extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='card-footer'>{children}</div>
  }
}
CardFooter.propTypes = {
  children: PropTypes.node
}
CardFooter.defaultProps = {
  children: null
}
export default { CardFooter }
