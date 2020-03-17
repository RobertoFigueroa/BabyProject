import * as types from '../types/event';

export const addEvent = (id, babyId, name, notes, date) => ({
    type: types.EVENT_ADDED,
    payload: {
        id,
        babyId,
        name,
        notes,
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