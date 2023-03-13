import {combineReducers} from 'redux';
import tutorialReducer from './reducer';


export const rootReducer = combineReducers({
    tuto: tutorialReducer,
})