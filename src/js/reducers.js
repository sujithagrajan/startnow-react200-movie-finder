import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';


const reducers = combineReducers({
    search: movieSearchReducer
})

export default reducers;