import { combineReducers } from 'redux';
import * as types from '../types/baby';

const babyById = (state={}, action) => {
    switch(action.type){
        case types.BABY_ADDED: {
            
            return {...state,[action.payload.id] : action.payload};
     
        }
        default: {
            return state;
        }
    }
}

const orderBaby = (state = [], action) => {
    switch(action.type){
        case types.BABY_ADDED:{
            return [...state, action.payload.id];
        }
        default:{
            return state;
        }
    }
}

const selectBaby = (state=null , action) => {
    switch(action.type){
        case types.BABY_SELECTED:{
            return state = action.payload.id;
        }
        default:{
            return state;
        }
    }
}


const babies = combineReducers({
    babyById,
    orderBaby,
    selectBaby,
});


export default babies;

export const getBaby = (state, id) => state.babyById[id];
export const getBabies = state => state.orderBaby.map(
    id => getBaby(state,id)
).filter(baby => baby != null);
