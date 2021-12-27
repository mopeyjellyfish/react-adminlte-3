import React from 'react'
import { Wrapper } from './Wrapper'
import { shallow } from 'enzyme'

describe('Wrapper', () => {
  it('renders correctly', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const wrapper = shallow(<Wrapper />)
    expect(wrapper).toMatchSnapshot()
    // On the first run of this test, Jest will generate a snapshot file automatically.
  })
})
