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

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    };

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    };

    offPokemonSoket = () => {
        this.database.ref('pokemons').off();
    };

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    };

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    };

    addPokemon = (data,localId, cb) => {
        const newKey = this.database.ref().child(`${localId}`).child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey ).set(Object.values(data)[0]).then(() => cb());
    };
}

const FirebaseCLass = new Firebase();

export default FirebaseCLass;