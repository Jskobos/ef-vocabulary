import React from 'react';
import { shallow, mount, render} from 'enzyme';
import SearchBox from './SearchBox';

const cefr = {min:0,max:6};
const books = {min:1,max:10}
const units = {min:1,max:10}

it('renders without crashing', () => {
  const wrapper = mount(<SearchBox filterText='' cefr={cefr} books={books} units={units} set='' />);
  expect(wrapper.props().cefr).toEqual(cefr);
});
