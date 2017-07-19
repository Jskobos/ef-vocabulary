import React from 'react';
import ReactDOM from 'react-dom';
import ResultBox from './ResultBox';

const vocab = [
  {'word':'dog','cefr':'A1','part':'noun','unit':1,'book':1},
  {'word':'velociraptor','cefr':'B2','part':'noun','unit':3,'book':4},
  {'word':'decide','cefr':'B1','part':'verb','unit':2,'book':3},
  {'word':'disappointed','cefr':'A2','part':'adjective','unit':5,'book':2}
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultBox vocab={vocab}/>, div);
});
