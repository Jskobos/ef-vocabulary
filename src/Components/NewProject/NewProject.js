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
    this.projRef      = firebaseApp.database().ref('/projects');
  }

  handleChange(e) {
    let project = JSON.parse(JSON.stringify(this.state.project));
    project[e.target.name] = e.target.value;
    this.setState({
      project: project
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Validate project

    // Push new project to Firebase
    this.projRef.push(this.state.project)
        .then((newProject) => {
          // Set active project to the new project
          this.props.setActiveProject(newProject.getKey());
        });
    // Clear the form.
    this.setState({
      project: {
        name: '',
        books: '',
        units: '',
        vocab: {}
      }
    });
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
