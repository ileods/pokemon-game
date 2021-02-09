import {useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import {FireBaseContext} from '../../../context/firebaseContext';
import { pokemonContext } from '../../../context/pokemonContext';

import PokemonCard from '../../../components/PokemonCard';
import s from './style.module.css';


const StartPage = () => {
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
      "type": "water",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      "name": "squirtle",
      "base_experience": 122,
      "height": 11,
      "id": 7,
      "values": {
        "top": "A",
        "right": 2,
        "bottom": 3,
        "left": 2
      }
  };
  
  const firebase = useContext(FireBaseContext);

    const history = useHistory();

    const [pokemons, setPokemons] = useState({});

  useEffect(()=>{
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

    const handlerClickButton = () => {

            history.push('/');
        
    };

    const handlerClickButtonStart= () =>{
        history.push('/game/board');
    }

    const addPokemon = () => {
      const data = newPokemon;
      firebase.addPokemon(data);
    };
// функиця для изменения состояния (открытие-закрытие карты)
    // const onCardClick = (id) => {
    //   setPokemons(prevState => {
    //     return  Object.entries(prevState).reduce((acc, item) => {
    //         const pokemon = {...item[1]};
    //         if (pokemon.id === id) {
    //                 pokemon.active=!pokemon.active;
    //             }
    
    //         acc[item[0]] = pokemon;

    //         firebase.postPokemon(item[0], pokemon);
    
    //         return acc;
    //     }, {});
    // });
    // };

    const onCardClick = (id) => {
      setPokemons(prevState => {
        return  Object.entries(prevState).reduce((acc, item) => {
            const pokemon = {...item[1]};
            if (pokemon.id === id) {
                    pokemon.active=!pokemon.active;
                }
    
            acc[item[0]] = pokemon;

            firebase.postPokemon(item[0], pokemon);
    
            if (pokemon.id === id) {
                pokemon.selected=!pokemon.selected;
            }
            return acc;
        }, {});
    });
    };

    return (
        <pokemonContext.Provider>
            <div className={s.direction}>
                <p> This is Game Page!!!</p>
                <button id="start" className={s.button} onClick={handlerClickButtonStart}>
                    start game!
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
                        isActive = {true}
                        isSelected = {selected}
                        onCardClick={onCardClick}
                        
                    />
                    ))
                }
                </div>
                <button id="back" className={s.button} onClick={handlerClickButton}>
                    Back to home
                </button>
            </div>
        </pokemonContext.Provider>
    );
};

export default StartPage;