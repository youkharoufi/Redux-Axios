import {
    GET_ONE_TUTORIAL,
    GET_ALL_TUTORIALS,
    CREATE_TUTORIAL,
    UPDATE_TUTORIAL,
    DELETE_ONE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
    RETRIEVE_TUTORIAL_BY_TITLE,
  } from "./action-constants";
  
  import TutorialService from "./tutorialService";

  export const getOneTutorial = (id) => async (dispatch) => {
    try {
      const res = await TutorialService.get( id );
  
      dispatch({
        type: GET_ONE_TUTORIAL,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const getAllTutorials = () => async (dispatch) => {
    try {
      const res = await TutorialService.getAll();
  
      dispatch({
        type: GET_ALL_TUTORIALS,
        payload: res.data,
      });
  
      
    } catch (err) {
      console.log(err);
    }
  };

  
  export const createTutorial = (data) => async (dispatch) => {
    try {
      const res = await TutorialService.create( data );
  
      dispatch({
        type: CREATE_TUTORIAL,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
      //console.log(err)
    }
  };
  
  export const updateTutorial = (id, data) => async (dispatch) => {
    try {
      const res = await TutorialService.update(id, data);
  
      dispatch({
        type: UPDATE_TUTORIAL,
        payload: res.data,
      });
  
    //   return Promise.resolve(res.data);
    } catch (err) {
    //   return Promise.reject(err);
    console.log(err)
    }
  };
  
  export const deleteTutorial = (id) => async (dispatch) => {
    try {
      await TutorialService.remove(id);
  
      dispatch({
        type: DELETE_ONE_TUTORIAL,
        payload: id ,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllTutorials = () => async (dispatch) => {
    try {
      const res = await TutorialService.removeAll();
  
      dispatch({
        type: DELETE_ALL_TUTORIALS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

    
  export const findTutorialsByTitle = (title) => async (dispatch) => {
    try {
      const res = await TutorialService.findByTitle(title);
        console.log(res.data);
      dispatch({
        type: RETRIEVE_TUTORIAL_BY_TITLE,
        payload: title,
      });
    } catch (err) {
      console.log(err);
    }
  };

  