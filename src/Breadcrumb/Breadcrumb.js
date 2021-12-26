import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Breadcrumb extends PureComponent {
  render() {
    const { children } = this.props
    return <ol className='breadcrumb float-sm-right'>{children}</ol>
  }
}
Breadcrumb.propTypes = {
  children: PropTypes.node
}
Breadcrumb.defaultProps = {
  children: null
}
export default { Breadcrumb }
