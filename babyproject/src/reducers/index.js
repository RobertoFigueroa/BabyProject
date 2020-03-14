import { combineReducers } from 'redux';


import babies, * as babiesSelectors from './baby';
import event, * as eventSelectors from './event';
import eventByBabyId, * as eventByBabyIdSelectors from './eventByBaby';

const reducer = combineReducers({
    babies,
    event,
    eventByBabyId,
});

export default reducer;


export const getBaby = (state, id) => babiesSelectors.getBaby(state.babies, id);

export const getBabies = state => babiesSelectors.getBaby(state.babies);

export const getEvent = (state, id) => eventSelectors.getEvent(state.event, id);

export const getEvents = (state,babyId) => eventByBabyIdSelectors.getEvents(state.eventByBabyId, babyId);


