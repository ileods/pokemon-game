import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import StartPage from './Start';
import BoardPage from './Board';
import FinishPage from './Finish';

import {pokemonContext} from '../../context/pokemonContext';

const GamePage = () => {
  const match = useRouteMatch();

  const [selectedPokemons, setSelectedPokemons] = useState({});

  const handlerSelectedPokemons = (key, pokemon) => {
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
  };

  return (
    <pokemonContext.Provider value={{
      pokemon: selectedPokemons, 
      onSelectedPokemons: handlerSelectedPokemons
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