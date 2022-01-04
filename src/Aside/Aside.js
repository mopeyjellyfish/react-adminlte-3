import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Aside extends PureComponent {
  render() {
    const { children, dark } = this.props
    return (
      <aside
        className={`control-sidebar ${
          dark ? 'control-sidebar-dark' : 'control-sidebar-light'
        }`}
      >
        <div className='p-3 control-sidebar-content'>{children}</div>
      </aside>
    )
  }
}
Aside.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool
}
Aside.defaultProps = {
  children: null,
  dark: true
}
export default { Aside }
