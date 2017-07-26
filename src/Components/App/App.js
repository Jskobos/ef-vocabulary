import React, { Component } from 'react';
import LeftNav from '../LeftNav/LeftNav';
import VocabBox from '../VocabBox/VocabBox';
import firebaseApp from '../../firebase';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.projectsRef = firebaseApp.database().ref();
    this.state = {
      isAuthenticated: true,
      activeProject: 'Trailblazers',
      projects: []
    }
    this.getActiveProject    = this.getActiveProject.bind(this);
    this.handleSelect        = this.handleSelect.bind(this);
    this.setActiveProject    = this.setActiveProject.bind(this);
  }

  listenForProjects(ref) {
    const items=[];
    ref.on('value', (snap) => {
      snap.forEach((child) => {
        const project = child.val();
        for (let item in project) {
          const course = project[item];
          items.push({
            name: course.name,
            key: item,
            units: course.units,
            books: course.books,
            vocab: course.vocab
          });
        }
      });

      this.setState({
        projects: items
      });

    })
  }

  componentDidMount() {
    this.listenForProjects(this.projectsRef);
  }

  handleSelect(i) {
    if (i === 'newProject') {
      alert('create new project');
    }
    this.setState({
      activeProject: i,
    });
  }

  getActiveProject() {
    const projects = this.state.projects.slice();
    for (let project in projects) {
      if (this.state.activeProject === 'newProject') { return {}; }
      if (projects[project].key === this.state.activeProject) { return projects[project]; }
    }
    return {};
  }

  setActiveProject(project) {
    this.setState({
      activeProject: project
    });
  }

  render() {
    return (
      <div className="App">
        <LeftNav projects={this.state.projects}
                 onSelect={(i) => this.handleSelect(i)}
                 activeProject={this.state.activeProject}/>
        <VocabBox project={this.getActiveProject()}/>
      </div>
    );
  }
}

export default App;
