import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import {pokemonContext} from '../../../context/pokemonContext';
import { FireBaseContext } from '../../../context/firebaseContext';

import PokemonCard from '../../../components/PokemonCard';

import s from './style.module.css';


const FinishPage = () =>{

    const history = useHistory();
    const { pokemon, pokemon2, onSelectedPokemons, newPokemon, result, setResult } = useContext(pokemonContext);
    const firebase = useContext(FireBaseContext);

    const [pokemons, setPokemons] = useState(pokemon2);


    if (Object.keys(pokemon).length === 0){
        history.replace('/game');
    } 

    const handlerChangeSelected = (key) => {
        const pokemonSelect = {...pokemons[key]};
        console.log(pokemonSelect)
    
        onSelectedPokemons(key, pokemonSelect, true);
    
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }));
        console.log(newPokemon)
    };

    



    return (
        <div>
            <div className={s.flex}>
            {
                    Object.entries(pokemon).map(([key, {name, img, id, type, values}]) => (<PokemonCard 
                        key = {key}
                        name = {name}
                        img = {img}
                        id = {id}
                        type = {type}
                        values = {values}
                        isActive 
                        className={s.card}
                    />
                    ))
                }
                </div>
            <button 
            className={s.button}
            onClick={() => {
                if (result==='win'){
                    firebase.addPokemon(newPokemon, () => {})
                }
                history.replace('/game');
                for (var member in pokemon) {
                    delete pokemon[member]
                };
                for (var member in pokemon2) {
                    delete pokemon2[member]
                };
                for (var member in newPokemon) {
                    delete newPokemon[member]
                };
                setResult('');
            }}>
                end game
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
                        isActive 
                        isSelected = {selected}
                        onCardClick={() => {
                            if (result==='win'){
                                if (Object.keys(newPokemon).length < 1 || selected) {
                                    handlerChangeSelected(key)
                                };
                            }
                            
                        }}
                        className={s.card}
                    />
                    ))
                }
            </div>
        </div>
    );
};

export default FinishPage;