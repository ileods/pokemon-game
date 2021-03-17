import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import {pokemonContext} from '../../../context/pokemonContext';
import { FireBaseContext } from '../../../context/firebaseContext';

import PokemonCard from '../../../components/PokemonCard';

import s from './style.module.css';
import { selectLocalID } from '../../../store/users';
import { useSelector } from 'react-redux';


const FinishPage = () =>{

    const history = useHistory();
    const { pokemon, pokemon2, onSelectedPokemons, newPokemon, result, setResult, setPokemonsPlayer2, setSelectedPokemons, setNewPokemon } = useContext(pokemonContext);
    const firebase = useContext(FireBaseContext);
    const localId = useSelector(selectLocalID);

    const [pokemons, setPokemons] = useState(pokemon2);


    if (Object.keys(pokemon).length === 0){
        history.replace('/game');
    } 

    const handlerChangeSelected = (key) => {
        const pokemonSelect = {...pokemons[key]};
    
        onSelectedPokemons(key, pokemonSelect, true);
    
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
                    firebase.addPokemon(newPokemon,localId, () => {})
                }
                history.replace('/game');
                
                setPokemonsPlayer2({});
                setSelectedPokemons({});
                setNewPokemon({});
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