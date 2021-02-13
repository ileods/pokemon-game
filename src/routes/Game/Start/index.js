import {useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import {FireBaseContext} from '../../../context/firebaseContext';
import {pokemonContext} from '../../../context/pokemonContext';

import PokemonCard from '../../../components/PokemonCard';
import s from './style.module.css';


const StartPage = () => {
  const pokemonsContext = useContext(pokemonContext);
  const firebase = useContext(FireBaseContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});

  useEffect(()=>{
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

    const handlerClickButton = () => {
      history.push('/game/board');
    };

  const handlerChangeSelected = (key) => {
    const pokemon = {...pokemons[key]}

    pokemonsContext.onSelectedPokemons(key, pokemon, false);

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected
      }
    }));
    };

    

    return (
            <div>
            <p className={s.text}>Choose 5 cards!</p>
                <button id="start" 
                  className={s.button} 
                  onClick={handlerClickButton}
                  disabled={Object.keys(pokemonsContext.pokemon).length < 5}
                >
                  start game!
                </button>
                <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => (<PokemonCard 
                        key = {key}
                        name = {name}
                        img = {img}
                        id = {id}
                        type = {type}
                        values = {values}
                        isActive = {true}
                        isSelected = {selected}
                        onCardClick={() => {
                          if (Object.keys(pokemonsContext.pokemon).length < 5 || selected) {
                            handlerChangeSelected(key)
                          };
                        }}
                        className={s.card}
                    />
                    ))
                }
                </div>
            </div>
  
    );
};

export default StartPage;