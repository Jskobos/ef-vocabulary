import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './LeftNav.css';

class LeftNav extends Component {
  render() {
    let tabs = [];
    //for (let k in this.props.projects) {
      //const project = this.props.projects[k]
      //tabs.push(<NavItem key={k} eventKey={k}>{project.name}</NavItem>)
    //}
    this.props.projects.forEach((project) => {
      tabs.push(<NavItem key={project.key} eventKey={project.key}>{project.name}</NavItem>)
    })
    return (
      <div className="LeftNav">
        <Nav bsStyle="pills" stacked
             activeKey={this.props.activeProject}
             onSelect={(i) => this.props.onSelect(i)}>
            {tabs}
        </Nav>
      </div>
    );
  }
}

export default LeftNav;
