import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './app';
import { headerReducer } from './header';
import { proceduresReducer } from './procedures';

export default combineReducers({
    routing: routerReducer,
    app: appReducer,
    procedures: proceduresReducer,
    header: headerReducer
})