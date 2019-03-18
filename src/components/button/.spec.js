import React from 'react';
import { shallow } from 'enzyme';
//component
import Button from './index';

describe('Button component', () => {
  it('Will render with text as props, but no onClick', () => {
    const wrap = shallow(<Button text={'Test 2'} />);
    expect(wrap).toMatchSnapshot();
  });

  it('Will render with onClick function', () => {
    const wrap = shallow(
      <Button text={'Test 3'} onClick={() => console.log('Test 3 success')} />
    );
    expect(wrap).toMatchSnapshot();
  });

  it('Will render with styling if primary is true', () => {
    const wrap = shallow(<Button text={'Test 4'} primary={true} />);
    expect(wrap).toMatchSnapshot();
  });
});
