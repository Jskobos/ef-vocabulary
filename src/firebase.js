import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyACy2palP0qVF2r3qgzhyy-olXbfzIBJCw",
  authDomain: "writer-tools.firebaseapp.com",
  databaseURL: "https://writer-tools.firebaseio.com",
  projectId: "writer-tools",
  storageBucket: "writer-tools.appspot.com",
  messagingSenderId: "116782737373"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
