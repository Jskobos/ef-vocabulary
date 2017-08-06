import React from 'react';
import ReactDOM from 'react-dom';
import FormRow from './FormRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormRow />, div);
});
