import React, { Component } from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';
import NewProject from '../NewProject/NewProject';
import './LeftNav.css';

class LeftNav extends Component {
  render() {
    let tabs = [];
    this.props.projects.forEach((project) => {
      tabs.push(<NavItem key={project.key} eventKey={project.key}>{project.name}</NavItem>)
    })
    return (
      <div className="LeftNav">
        <Nav bsStyle="pills" stacked
             activeKey={this.props.activeProject}
             onSelect={(i) => this.props.onSelect(i)}>
            {tabs}
            <NavItem className="newProject" key={'newProject'} eventKey={'newProject'}>
              <Glyphicon glyph="plus-sign"/> New Project
            </NavItem>
        </Nav>
        <NewProject setActiveProject={this.props.setActiveProject}/>
      </div>
    );
  }
}

export default LeftNav;
