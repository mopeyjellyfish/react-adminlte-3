import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export function Wrapper(props) {
  const {
    children,
    dark,
    fixedFooter,
    fixedNavbar,
    fixedSidebar,
    collapsedSidebar,
    boxed
  } = props

  useEffect(() => {
    const darkMode = dark ? ['dark-mode'] : []
    const fixedFooterClass = fixedFooter ? ['layout-footer-fixed'] : []
    const fixedNavbarClass = fixedNavbar ? ['layout-navbar-fixed'] : []
    const fixedSidebarClass = fixedSidebar ? ['layout-fixed'] : []
    const collapsedSidebarClass = collapsedSidebar ? ['sidebar-collapse'] : []
    const boxedClass = boxed ? ['layout-boxed'] : []
    const classes = [
      ...darkMode,
      ...fixedFooterClass,
      ...fixedNavbarClass,
      ...fixedSidebarClass,
      ...collapsedSidebarClass,
      ...boxedClass
    ]
    if (classes) {
      document.body.classList.add(...classes)

      return () => {
        document.body.classList.remove(...classes)
      }
    }
  })
  return (
    <div className='wrapper' style={{ height: '100%' }}>
      {children}
    </div>
  )
}
Wrapper.propTypes = {
  children: PropTypes.node,
  fixedFooter: PropTypes.bool,
  fixedSidebar: PropTypes.bool,
  fixedNavbar: PropTypes.bool,
  collapsedSidebar: PropTypes.bool,
  dark: PropTypes.bool,
  boxed: PropTypes.bool
}
Wrapper.defaultProps = {
  children: null,
  fixedFooter: false,
  fixedSidebar: false,
  fixedNavbar: false,
  collapsedSidebar: false,
  dark: false,
  boxed: false
}
export default { Wrapper }
