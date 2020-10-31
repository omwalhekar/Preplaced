import axios from "axios";
import {GET_CARDS, ADD_FAVCARD, REM_FAVCARD} from "./types";


//get all cards
export const getCards = () => async dispatch =>{
    try{
        const res = await axios.get("api/cards");

        dispatch({
            type: GET_CARDS,
            payload: res.data,
        });
    }catch(error){
        console.log("SERVER ERRORRRRRRRRRR");
    }
};


//add a card to favorites
export const addFavcard = name => async dispatch => {
    try{
        const res = await axios.post("api/favorites/" + name);

        dispatch({
            type: ADD_FAVCARD,
            payload: res.data,
        });
    }catch(error){
        console.log("SERVER ERROR");
    }
};

//remove card from favorites
export const remFavcard = name => async dispatch => {
    try{
        const res = await axios.post("api/favorites/" + name);

        dispatch({
            type: REM_FAVCARD,
            payload: res.data,
        });
    }catch(error){
        console.log("SERVER ERROR");
    }
};


