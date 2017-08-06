import React from 'react';
import ReactDOM from 'react-dom';
import EditWord from './EditWord';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditWord />, div);
});
