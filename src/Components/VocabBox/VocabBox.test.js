import React from 'react';
import ReactDOM from 'react-dom';
import VocabBox from './VocabBox';


const project = {
  vocab: {
    0: {
      word: 'hello',
    }
  }
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VocabBox project={project}/>, div);
});
