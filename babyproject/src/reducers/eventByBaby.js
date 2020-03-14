import pull from 'lodash/pull';
import * as types from '../types/event';
import eventById from './event';

const eventByBabyId = (state = {}, action) => {
    switch(action.type){
        case types.EVENT_ADDED: {
            if(action.payload.babyId in state){
                return {...state, [action.payload.babyId]: [...state[action.payload.babyId], action.payload.id] };
            }
            return {...state, [action.payload.babyId] : [action.payload.id]};
            }   
        case types.EVENT_DELETED: {
            return {...state, [action.payload.babyId]: pull(state[action.payload.babyId], action.payload.id)}
        }
        default: {
            return state;
        }
    }
}

export default eventById;

export const getEvents = (state, babyId) => state.eventByBabyId[babyId];