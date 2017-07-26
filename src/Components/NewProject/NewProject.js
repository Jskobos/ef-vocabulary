import React, { Component } from 'react';
import firebaseApp from '../../firebase';
import NewProjectForm from '../NewProjectForm/NewProjectForm';

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        name: '',
        books: '',
        units: '',
        vocab: {}
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let project = JSON.parse(JSON.stringify(this.state.project));
    project[e.target.name] = e.target.value;
    this.setState({
      project: project
    });
  }

  handleSubmit() {
    alert('submitting!!!!!');
    // Validate project
    // Push new project to Firebase
    // Set active project to the new project
    //this.props.updateProjects(this.state.projects);
  }

  render() {
    return(<NewProjectForm
              project={this.state.project}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
          />)
  }
}

export default NewProject;
