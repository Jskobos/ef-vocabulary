import React from 'react';
import ReactDOM from 'react-dom';
import WordRow from './WordRow';

const word = {'word':'dog','cefr':'A1','part':'noun','unit':1,'book':1,'set':'animals'}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordRow word={word}/>, div);
});
