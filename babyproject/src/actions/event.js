import * as types from '../types/event';

export const addEvent = (id, babyId, name, date) => ({
    type: types.EVENT_ADDED,
    payload: {
        id,
        babyId,
        name,
        date,
    },
});

export const deleteEvent = (id, babyId) => ({
    type: types.EVENT_DELETED,
    payload: {
        id,
        babyId,
    },
});