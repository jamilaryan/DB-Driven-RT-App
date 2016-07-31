import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyB9f6lahQ95Remv5QobHcdk0yQ05x7TxC8",
    authDomain: "minicrm-cloud-app.firebaseapp.com",
    databaseURL: "https://minicrm-cloud-app.firebaseio.com",
    storageBucket: "minicrm-cloud-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

/*
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9f6lahQ95Remv5QobHcdk0yQ05x7TxC8",
    authDomain: "minicrm-cloud-app.firebaseapp.com",
    databaseURL: "https://minicrm-cloud-app.firebaseio.com",
    storageBucket: "minicrm-cloud-app.appspot.com",
  };
  firebase.initializeApp(config);

*/
