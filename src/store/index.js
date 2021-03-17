import {configureStore} from '@reduxjs/toolkit';

import pokemonsReducer from './pokemons';
import userReducer from './users';

export default configureStore({
    reducer: {
        user: userReducer,
        pokemons: pokemonsReducer
    }
})