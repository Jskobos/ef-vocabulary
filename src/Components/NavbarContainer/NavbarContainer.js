import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
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
      <Navbar className="NavBar">
        <span>Welcome { this.props.user }</span>
      </Navbar>
    )
  }
}

export default NavbarContainer;
