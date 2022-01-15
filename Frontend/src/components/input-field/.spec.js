import React from 'react';
import { shallow } from 'enzyme';
//component
import Input from './index';

describe('Input field component', () => {
  it('Will render with no props', () => {
    const wrap = shallow(<Input />);
    expect(wrap).toMatchSnapshot();
  });

  it('Will accept all props, will be hidden', () => {
    const wrap = shallow(
      <Input
        onChange={() => console.log('hit')}
        value={'hit'}
        disabled={true}
        placeholder={'not hit'}
        className="d-inline-flex flex-column"
      />
    );
  });
});
