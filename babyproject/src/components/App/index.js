import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import CreateBabyForm from '../CreateBabyForm';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <CreateBabyForm/>
    </Provider>
); 

export default App;