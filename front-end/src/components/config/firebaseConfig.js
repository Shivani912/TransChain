import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCRigIXLDkPY6L2cvVwqqEtNq-ZAERN5Dg",
    authDomain: "transchain-gbc.firebaseapp.com",
    databaseURL: "https://transchain-gbc.firebaseio.com",
    projectId: "transchain-gbc",
    storageBucket: "",
    messagingSenderId: "789734830513",
    appId: "1:789734830513:web:0707f9e148ecce99"
  };
  firebaseConfig.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots : true});

  export default firebase;