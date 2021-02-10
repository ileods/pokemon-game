import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import StartPage from './Start';
import BoardPage from './Board';

import {pokemonContext} from '../../context/pokemonContext';

const GamePage = () => {
  const match = useRouteMatch();

  const [pokemon, setPokemon] = useState({});

  const handlerIsSelect = (val) => {
    setPokemon(val)
  }
  return (
    <pokemonContext.Provider value={{pokemon, inSelect: handlerIsSelect}}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            {/* <Route path={`${match.path}/finish`} component={FinishPage} /> */}
        </Switch>
      </pokemonContext.Provider>
  );
};

export default GamePage;