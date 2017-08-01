import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import FirebaseUI from '../../firebaseUI';
import * as firebase from 'firebase';
import './LoginModal.css';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
    this.uiConfig = {
      callbacks: {
            signInSuccess: this.signInSuccess.bind(this)
          },
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
  }
  signInSuccess(currentUser, credential, redirectUrl) {
    this.close();
    return false;
  }

  close() {
      this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  componentDidMount() {
    FirebaseUI.start('#firebaseui-auth-container', this.uiConfig);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user) {
      this.close();
    }
    else {
      this.open();
    }
  }

  render() {
    return (
      <Modal show={this.state.showModal}>
        <div id='firebaseui-auth-container'></div>
      </Modal>
    )
  }
}

export default LoginModal;
