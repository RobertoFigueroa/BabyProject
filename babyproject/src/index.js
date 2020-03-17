import React from 'react';

import ReactDOM from 'react-dom';
import App from './components/App';

/*
state = {
    babies : {
        order: [],
        byId: {
            3924NFSA832: {
                name: Bartolo,
                apellido: Bartolo
                }
        },
        selected: null
    },
    events: {
        byId: {
            FJEF9832: {
                id: FJEF9832,
                name : 'Tomar pacha',
                date: 01/01/20,
            }
        },
    }
    byBabyId: {
            3924NFSA832: [FJEF9832]
        }
}
ACTIONS:

BABY_ADDED 
BABY_SELECTED
EVENT_ADDED
EVENT_DELETED

*/

// const babyById = (state={}, action) => {
//     switch(action.type){
//         case 'BABY_ADDED': {
            
//             return {...state,[action.payload.id] : action.payload};
     
//         }
//         default: {
//             return state;
//         }
//     }
// }

// const orderBaby = (state = [], action) => {
//     switch(action.type){
//         case 'BABY_ADDED':{
//             return [...state, action.payload.id];
//         }
//         default:{
//             return state;
//         }
//     }
// }

// const selectBaby = (state=null , action) => {
//     switch(action.type){
//         case 'BABY_SELECTED':{
//             return state = action.payload.id;
//         }
//         default:{
//             return state;
//         }
//     }
// }


// const eventById = (state = {}, action) => {
//     switch(action.type){
//         case 'EVENT_ADDED': {
//             return {...state, 
//                 [action.payload.id] : action.payload
//              };
//         }
//         case 'EVENT_DELETED': {
//             return omit(state, action.payload.id);
//         }
//         default: {
//             return state;
//         }
//     }
// }

// const eventByBabyId = (state = {}, action) => {
//     switch(action.type){
//         case 'EVENT_ADDED': {
//             if(action.payload.babyId in state){
//                 return {...state, [action.payload.babyId]: [...state[action.payload.babyId], action.payload.id] };
//             }
//             return {...state, [action.payload.babyId] : [action.payload.id]};
//             }   
//         case 'EVENT_DELETED': {
//             return {...state, [action.payload.babyId]: pull(state[action.payload.babyId], action.payload.id)}
//         }
//         default: {
//             return state;
//         }
//     }
// }

 

// const babies = combineReducers({
//     babyById,
//     orderBaby,
//     selectBaby,
// });


// const app = combineReducers({
//     babies,
//     eventById,
//     eventByBabyId,
// });

// const store = createStore(app);

// store.dispatch({
//     type: 'BABY_ADDED',
//     payload:{
//         id:'fe3234ffe',
//         name:'Juan',
//         lastName:'Meza',
//     }
// });




// store.dispatch({
//     type: 'BABY_SELECTED',
//     payload:{
//         id:'fe3234ffe',
//         name:'Juan',
//         lastName:'Meza',
//     }
// });


// store.dispatch({
//     type: 'EVENT_ADDED',
//     payload:{
//         babyId:'fe3234ffe',
//         id:'fefef1222',
//         name:'Hacer PiPi',
//         date: '12/12/12',
//     }
// });

// console.log(store.getState());

// store.dispatch({
//     type: 'EVENT_ADDED',
//     payload:{
//         babyId:'fe3234ffe',
//         id:'2342432',
//         name:'Hacer pop',
//         date: '13/12/12',
//     }
// });

// console.log(store.getState());

// store.dispatch({
//     type: 'EVENT_DELETED',
//     payload:{
//         id:'2342432',
//         babyId: 'fe3234ffe',
//     }
// });

// store.dispatch({
//     type: 'EVENT_DELETED',
//     payload:{
//         id:'fefef1222',
//         babyId: 'fe3234ffe',
//     }
// });


// console.log(store.getState());

//TODO: BUILD CreateForm


ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );