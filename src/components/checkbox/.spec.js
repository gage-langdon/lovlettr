import React from 'react';
import { shallow } from 'enzyme';

//component
import Checkbox from './index';

describe('Checkbox component', () => {
  it('Will render with hidden passed in, will be hidden', () => {
    const wrap = shallow(<Checkbox hidden={true} />);
    expect(wrap).toMatchSnapshot();
  });
});
