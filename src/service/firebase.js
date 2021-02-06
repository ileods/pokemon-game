import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCIsxTD2d5jKZ2YWNrraki1OyrdxKPxn4Y",
    authDomain: "pokemon-game-fc58b.firebaseapp.com",
    databaseURL: "https://pokemon-game-fc58b-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-fc58b",
    storageBucket: "pokemon-game-fc58b.appspot.com",
    messagingSenderId: "232226123642",
    appId: "1:232226123642:web:1ad3233285f5c4ae1ab0c3"
};
  
firebase.initializeApp(firebaseConfig);

export const fire = firebase;

export const database = fire.database();

export default database;