import React from 'react';
import ReactDOM from 'react-dom';
import NewProjectForm from './NewProjectForm';

const project = {
  name: 'hello',
  books: 10,
  units: 10
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProjectForm project={project}/>, div);
});
