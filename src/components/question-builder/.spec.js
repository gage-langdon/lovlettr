import React from 'react';
import { shallow } from 'enzyme';
//component
import QuestionBuilder from './index';

describe('Question component', () => {
  it('Will only render with all props passed in', () => {
    const wrap = shallow(<QuestionBuilder />);
    expect(wrap).toMatchSnapshot();
  });
});
