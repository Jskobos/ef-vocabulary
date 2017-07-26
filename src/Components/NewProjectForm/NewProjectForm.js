import React from 'react';
import { FormControl, Button } from 'react-bootstrap';
import './NewProjectForm.css';

const NewProjectForm = (props) => {
  return (
    <div className="NewProjectForm">
      <form onSubmit={props.onSubmit}>
        <FormControl
          id="projectName"
          name="name"
          type="text"
          placeholder="Project name"
          value={props.project.name}
          onChange={props.onChange}
        />
        <FormControl
          id="projectBooks"
          name="books"
          type="text"
          placeholder="# of books"
          value={props.project.books}
          onChange={props.onChange}
        />
        <FormControl
          id="projectUnits"
          name="units"
          type="text"
          placeholder="# of units"
          value={props.project.units}
          onChange={props.onChange}
        />
        <Button type="submit" bsStyle="primary">Add Project</Button>
      </form>
    </div>
  )
}

export default NewProjectForm;
