import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class PageHeader extends PureComponent {
  render() {
    const { children, title } = this.props
    return (
      <div className='content-header'>
        <div className='row mb-2'>
          <div className='col-sm-6'>
            <h1>{title}</h1>
          </div>
          <div className='col-sm-6'>{children}</div>
        </div>
      </div>
    )
  }
}
PageHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node
}
PageHeader.defaultProps = {
  title: '',
  subTitle: '',
  children: null
}
export default { PageHeader }
