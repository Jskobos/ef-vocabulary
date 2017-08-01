import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import firebase from '../../firebase';

import './NavbarContainer.css';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase.auth().signOut();
  }

  render() {
    return(
      <div className="Navbar">
        <div className="display-name nav-item">{this.props.user}</div>
        <Button className="nav-item" bsStyle="primary" onClick={this.signOut}>Sign Out</Button>
      </div>
    )
  }
}

export default NavbarContainer;
