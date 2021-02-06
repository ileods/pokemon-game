import {useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import database from '../../service/firebase';

import PokemonCard from '../../components/PokemonCard';
import s from './style.module.css';


const GamePage = () => {
  const newPokemon = {
      "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
      ],
      "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
      },
      "type": "flying",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      "name": "pidgeotto",
      "base_experience": 122,
      "height": 11,
      "id": 17,
      "values": {
        "top": "A",
        "right": 2,
        "bottom": 7,
        "left": 5
      }
  };
  

    const history = useHistory();

    const [pokemons, setPokemons] = useState({});

  useEffect(()=>{
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

    const handlerClickButton = () => {
        history.push('/');
    };

    const addPokemon = () => {
      let newKey = database.ref().child('pokemons').push().key;
      let newCards = {};
      newCards['/pokemons/' + newKey] = newPokemon;
      return database.ref().update(newCards);
    };

    const onCardClick = (id) => {
      setPokemons(prevState => {
        return  Object.entries(prevState).reduce((acc, item) => {
            const pokemon = {...item[1]};
            if (pokemon.id === id) {
                  pokemon.active=!pokemon.active;
                  database.ref('pokemons/'+ item[0]).set({...item[1],active:true})
                }
    
            acc[item[0]] = pokemon;
    
            return acc;
        }, {});
    });
    };

    return (
        <>
            <div className={s.direction}>
                <p> This is Game Page!!!</p>
                <button className={s.button} onClick={addPokemon}>
                    add new pokemon
                </button>
                <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (<PokemonCard 
                        key = {key}
                        name = {name}
                        img = {img}
                        id = {id}
                        type = {type}
                        values = {values}
                        isActive = {active}
                        onCardClick={onCardClick}
                    />
                    ))
                }
                </div>
                <button className={s.button} onClick={handlerClickButton}>
                    Back to home
                </button>
            </div>
        </>
    );
};

export default GamePage;