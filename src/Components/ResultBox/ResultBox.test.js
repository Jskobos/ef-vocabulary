import React from 'react';
import { shallow, mount, render} from 'enzyme';
import ResultBox from './ResultBox';
import WordRow from '../WordRow/WordRow';

const vocab = {
  0: {'word':'dog','cefr':0,'part':'n','unit':1,'book':1},
  1: {'word':'velociraptor','cefr':4,'part':'n','unit':3,'book':4},
  2: {'word':'decide','cefr':3,'part':'v','unit':2,'book':3},
  3: {'word':'disappointed','cefr':1,'part':'adj','unit':5,'book':2}
}

const cefr = {min:0,max:6};
const books = {min:1,max:10}
const units = {min:1,max:10}
const props = {
  cefr: cefr,
  vocab: vocab,
  units: units,
  books: books,
  filterText:'',
  set: '',
  addVocabEntry: jest.fn(),
  deleteVocabEntry: jest.fn()
}

const getMountedWrapper = (props) => {
  return mount(<ResultBox vocab={props.vocab} sortKey='word'
      cefr={props.cefr}
      books={props.books}
      units={props.units}
      set={props.set}
      filterText={props.filterText}
      addVocabEntry={props.addVocabEntry}
      deleteVocabEntry={props.deleteVocabEntry}  />);
}

it('renders without crashing', () => {
  const wrapper = mount(<ResultBox vocab={vocab} sortKey='word' />);
  expect(wrapper.props().sortKey).toEqual('word');
});

it('should be selectable by class .ResultBox', () => {
  expect(shallow(<ResultBox />).is('.ResultBox')).toBe(true);
})

it('should render each word', () => {
  const wrapper = getMountedWrapper(props);
  expect(wrapper.find(WordRow).length).toBe(4);
});

it('should render words in alphabetical order by default', () => {
  const wrapper = getMountedWrapper(props);
  expect(wrapper.find(WordRow).last().props().word.word).toBe('velociraptor');
});

it('should filter words based on props', () => {
  const p = JSON.parse(JSON.stringify(props));
  p.books.min = 3;
  const wrapper = getMountedWrapper(p);
  expect(wrapper.find(WordRow).length).toBe(2);
});
