import React, { Component } from 'react';
import LeftNav from '../LeftNav/LeftNav';
import VocabBox from '../VocabBox/VocabBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: true,
      projects: ['Trailblazers 3.0', 'Small Stars'],
      activeProject: 0
    }
  }

  handleSelect(i) {
    this.setState({activeProject: i});
  }

  render() {
    return (
      <div className="App">
        <LeftNav projects={this.state.projects}
                 onSelect={(i) => this.handleSelect(i)}
                 activeProject={this.state.activeProject}/>
        <VocabBox/>
      </div>
    );
  }
}

export default App;
