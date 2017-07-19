import React from 'react';
import ReactDOM from 'react-dom';
import LeftNav from './LeftNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeftNav projects={['hello','world']}
                           onSelect={() => {return true;} }
                           activeProject={0}/>, div);
});
