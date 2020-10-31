import axios from "axios";
import {REM_FAVCARD, GET_FAVCARDS} from "./types";

//Get fav cards
export const getFavcards = () => async dispatch =>{
    
    try {
        
        const res = await axios.get("/api/favorites");
        dispatch({
            type: GET_FAVCARDS,
            payload: res.data,
        });
    } catch (error) {
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