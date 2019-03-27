import React from 'react';
import { shallow } from 'enzyme';

import TextEditor from './index';

describe('Text-Editor Component', () => {
  it('Will render default props', () => {
    const wrap = shallow(<TextEditor onChange={() => {}} />);
    expect(wrap).toMatchSnapshot();
  });

  it('Will render with value passed as prop', () => {
    const wrap = shallow(
      <TextEditor value="<p>testing 123</p>" onChange={() => {}} />
    );
    expect(wrap).toMatchSnapshot();
  });
});
