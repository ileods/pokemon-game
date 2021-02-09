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

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.fire = firebase;
        this.database = this.fire.database();
    };

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    };

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    };

    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
    };
}


export default Firebase;