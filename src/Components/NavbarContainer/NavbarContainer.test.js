import React from 'react';
import ReactDOM from 'react-dom';
import NavbarContainer from './NavbarContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavbarContainer />, div);
});
