import * as types from '../types/event';
import omit from 'lodash/omit';


const eventById = (state = {}, action) => {
    switch(action.type){
        case types.EVENT_ADDED: {
            return {...state, 
                [action.payload.id] : action.payload
             };
        }
        case types.EVENT_DELETED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
}

export default eventById;

export const getEvent = (state, id) => state.eventById[id];



