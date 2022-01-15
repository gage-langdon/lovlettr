import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './index.js';

describe('Navbar Component', () => {
  it('Should render with default props', () => {
    const wrap = shallow(<Navbar />);
    expect(wrap).toMatchSnapshot();
  });
});
