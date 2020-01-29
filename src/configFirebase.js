import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyALYnIM4im7etDg4WU7-52Zy43va-hEnd4',
  authDomain: 'vue-blog-9b5f7.firebaseapp.com',
  databaseURL: 'https://vue-blog-9b5f7.firebaseio.com',
  projectId: 'vue-blog-9b5f7',
  storageBucket: 'vue-blog-9b5f7.appspot.com',
  messagingSenderId: '784913562092',
  appId: '1:784913562092:web:c86a69707ce940c35328c9'
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default {
  db
};
