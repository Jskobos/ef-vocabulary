import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './LeftNav.css';

class LeftNav extends Component {

  render() {
    let keyCount = 0;
    let tabs = [];
    this.props.projects.forEach((project) => {
      tabs.push(<NavItem key={keyCount} eventKey={keyCount++}>{project}</NavItem>)
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
