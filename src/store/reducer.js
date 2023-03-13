import { CREATE_TUTORIAL, GET_ALL_TUTORIALS, GET_ONE_TUTORIAL, DELETE_ALL_TUTORIALS, DELETE_ONE_TUTORIAL, RETRIEVE_TUTORIAL_BY_TITLE, UPDATE_TUTORIAL } from "./action-constants";




const initialState = {
    tutorials:[]
}


export default function tutorialReducer(state = initialState, {type, payload}){

    switch(type){

        case GET_ONE_TUTORIAL:
            return{
                ...state,
                tutorials:[...state.tutorials.filter(tuto => tuto.id === payload)]
            };

        case GET_ALL_TUTORIALS:
            return{
                ...state,
                tutorials:payload
            };

        case CREATE_TUTORIAL:
            return {
                ...state,
                tutorials:[...state.tutorials, payload]
            };

        case UPDATE_TUTORIAL:
            return{
                ...state,
                tutorials:[...state.tutorials.filter(tuto => tuto.id !== payload.id), payload]
            };

        case DELETE_ONE_TUTORIAL:
            return{
                ...state,
                tutorials:[...state.tutorials.filter(tuto => tuto.id !== payload)]
            };

        case DELETE_ALL_TUTORIALS:
            return{
                ...state,
                tutorials:[]
            };

        case RETRIEVE_TUTORIAL_BY_TITLE:
            return {
                ...state,
                tutorials:[...state.tutorials.filter(tuto => tuto.title === payload)]
            };
        
        default:
            return state;
    }
}