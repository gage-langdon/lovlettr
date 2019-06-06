import React from 'react';
import { shallow } from 'enzyme';
//component
import Sub from './index';

describe('Sub component', () => {
  it('Will render with just text passed in', () => {
    const wrap = shallow(<Sub text="test" />);
    expect(wrap).toMatchSnapshot();
  });
});
