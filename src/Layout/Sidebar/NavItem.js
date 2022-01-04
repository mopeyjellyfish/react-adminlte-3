import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export function SidebarNavItem(props) {
  const { children, icon, text, active } = props
  const [isOpen, setOpen] = useState(false)
  return (
    <li className='nav-item'>
      <span
        className={`nav-link ${active ? 'active' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={icon} className='nav-icon' />
        <p>
          {text}
          {children ? (
            <FontAwesomeIcon
              className='right'
              icon={isOpen ? faAngleDown : faAngleLeft}
            />
          ) : null}
        </p>
      </span>
      {children}
    </li>
  )
}

SidebarNavItem.propTypes = {
  children: PropTypes.element,
  icon: PropTypes.object,
  text: PropTypes.string,
  active: PropTypes.bool
}
SidebarNavItem.defaultProps = {
  children: null,
  icon: null,
  text: '',
  active: false
}
export default { SidebarNavItem }
