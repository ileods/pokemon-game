import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import StartPage from './Start';
import BoardPage from './Board';
import FinishPage from './Finish';

import { pokemonContext } from '../../context/pokemonContext';

const GamePage = () => {
  const match = useRouteMatch();

  const [selectedPokemons, setSelectedPokemons] = useState({});

  const [pokemonsPlayer2, setPokemonsPlayer2] = useState({});

  const [newPokemon, setNewPokemon] = useState({});

  const [result, setResult] = useState('');

  const handlerSelectedPokemons = (key, pokemon, player2) => {
    if (player2 === true) {
      setNewPokemon(prevState => {
        if (prevState[key]) {
          const copyState = {...prevState};
          delete copyState[key];
  
          return copyState;
        }
        return {
          ...prevState,
          [key]: pokemon
        }
      })
    } else {
      setSelectedPokemons(prevState => {
        if (prevState[key]) {
          const copyState = {...prevState};
          delete copyState[key];
  
          return copyState;
        }
        return {
          ...prevState,
          [key]: pokemon
        }
      })
    }
    
  };

  return (
    
    <pokemonContext.Provider value={{
      pokemon: selectedPokemons,
      pokemon2: pokemonsPlayer2,
      newPokemon, 
      setNewPokemon,
      onSelectedPokemons: handlerSelectedPokemons,
      setPokemonsPlayer2,
      result, 
      setResult
      }}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
      </pokemonContext.Provider>
  );
};

export default GamePage;