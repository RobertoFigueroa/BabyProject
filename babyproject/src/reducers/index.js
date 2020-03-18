import { combineReducers } from 'redux';


import babies, * as babiesSelectors from './baby';
import eventById, * as eventSelectors from './event';
import eventByBabyId, * as eventByBabyIdSelectors from './eventByBaby';

const reducer = combineReducers({
    babies,
    eventById,
    eventByBabyId,
});

export default reducer;


export const getBaby = (state, id) => babiesSelectors.getBaby(state.babies, id);

export const getBabies = state => babiesSelectors.getBabies(state.babies);

export const getSelectedBaby = (state) => babiesSelectors.getSelectedBaby(state.babies);

export const getEvent = (state, id) => eventSelectors.getEvent(state.eventById, id);

export const getEvents = state => eventSelectors.getEvents(state.eventById);

export const getEventsByBabyId = (state,babyId) => eventByBabyIdSelectors.getEventsByBaby(state.eventByBabyId, babyId);



