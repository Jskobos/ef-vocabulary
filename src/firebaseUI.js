import * as firebase from 'firebase';
import firebaseui from 'firebaseui';
import firebaseApp from './firebase';

const FirebaseUI = new firebaseui.auth.AuthUI(firebaseApp.auth());

export default FirebaseUI;
