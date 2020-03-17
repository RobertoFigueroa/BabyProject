import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import CreateBabyForm from '../CreateBabyForm';
import SideBarEvent from '../SideBarEvent';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <CreateBabyForm/>
        < SideBarEvent/>
    </Provider>
); 


export default App;