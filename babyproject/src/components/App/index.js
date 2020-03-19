import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import CreateBabyForm from '../CreateBabyForm';
import SideMenu from '../SideBarEvent';
import SearchBar from '../searchBar';
import EventBoard from '../EventBoard';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <CreateBabyForm/>
        <SideMenu/>
        <SearchBar/>
        <EventBoard />
    </Provider>
); 


export default App;