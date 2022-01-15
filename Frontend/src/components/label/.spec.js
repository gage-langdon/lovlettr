import React from 'react';
import { shallow } from 'enzyme';

import Label from './index';

describe('Label Component', () => {
  it('Should render with default props', () => {
    const wrap = shallow(<Label>test</Label>);
    expect(wrap).toMatchSnapshot();
  });

  it('Should render with cursive font', () => {
    const wrap = shallow(<Label cursive>test</Label>);
    expect(wrap).toMatchSnapshot();
  });

  it('Should render with classNames as props', () => {
    const wrap = shallow(<Label className="test">test</Label>);
    expect(wrap).toMatchSnapshot();
  });

  it('Should render with a react component as the child', () => {
    const wrap = shallow(
      <Label className="test">
        <span>test</span>
      </Label>
    );
    expect(wrap).toMatchSnapshot();
  });
});
