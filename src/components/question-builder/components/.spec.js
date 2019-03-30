import React from 'react';
import { shallow } from 'enzyme';
//component
import AddAnswer from './add-answer';

describe('Answer component', () => {
  it('Will only render with all props passed in', () => {
    const wrap = shallow(<AddAnswer />);
    expect(wrap).toMatchSnapshot();
  });
});
