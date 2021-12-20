import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1C_n9TV0EQ4Xc77guqQvHra04Eo9euc",
  authDomain: "creditbuddy-c05d5.firebaseapp.com",
  projectId: "creditbuddy-c05d5",
  storageBucket: "creditbuddy-c05d5.appspot.com",
  messagingSenderId: "940592841604",
  appId: "1:940592841604:web:085ffaf4562110511413d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;