import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export function SidebarWrapper(props) {
  const { children } = props
  useEffect(() => {
    document.body.classList.add('sidebar-mini')

    return () => {
      document.body.classList.remove('sidebar-mini')
    }
  })
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      {children}
    </aside>
  )
}
SidebarWrapper.propTypes = {
  children: PropTypes.node
}
SidebarWrapper.defaultProps = {
  children: null
}
export default { SidebarWrapper }
