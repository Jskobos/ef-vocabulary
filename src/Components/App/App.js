import React, { Component } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import NavbarContainer from '../NavbarContainer/NavbarContainer';
import LeftNav from '../LeftNav/LeftNav';
import VocabBox from '../VocabBox/VocabBox';
import firebaseApp from '../../firebase';
import renderIf from 'render-if';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.projectsRef = firebaseApp.database().ref();
    this.state = { projects: [] }
    this.getActiveProject    = this.getActiveProject.bind(this);
    this.setActiveProject    = this.setActiveProject.bind(this);
    this.listenForAuth       = this.listenForAuth.bind(this);
  }

  getInitialState() {
    const user = firebaseApp.auth().currentUser;
    return { user: user ? user.email : null}
  }

  listenForProjects(ref) {
    let items=[];
    ref.on('value', (snap) => {
      snap.forEach((child) => {
        items = []
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

    });
  }

  listenForAuth() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({
          user: user.displayName || user.email
        });
      }
      else {
        this.setState({user:null});
      }
    });
  }

  componentDidMount() {
    this.listenForProjects(this.projectsRef);
    this.listenForAuth();
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
        {renderIf(this.state.user === null)(<LoginModal user={this.state.user}/>)}
        <NavbarContainer user={this.state.user}/>
        <div className="main-box">
          <LeftNav projects={this.state.projects}
                   onSelect={(i) => this.setActiveProject(i)}
                   activeProject={this.state.activeProject}
                   setActiveProject={this.setActiveProject}/>
          <VocabBox project={this.getActiveProject()}/>
        </div>
      </div>
    );
  }
}

export default App;
