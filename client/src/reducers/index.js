import {GET_CARDS, ADD_FAVCARD,REM_FAVCARD, GET_FAVCARDS} from "../actions/types";

const initialState = {
    cards: [],
    favCards: [],
};

export default function (state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case GET_CARDS:
            return{
                ...state,
                cards: payload,
            };
        case GET_FAVCARDS:
            return {
                ...state,
                favCards: payload,
            }
        case ADD_FAVCARD:
            return{
                ...state,
                favCards: payload,
            };
        case REM_FAVCARD:
            return{
                ...state,
                favCards: payload,
            };
        default:
            return state;
    }
}