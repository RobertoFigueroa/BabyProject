import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import CreateBabyForm from '../CreateBabyForm';
import EventView from '../EventView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';


const store = configureStore();

export const history = createBrowserHistory();

const App = () => (

        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/'  exact component={CreateBabyForm}/>
                    <Route path='/eventview/'>
                        <EventView/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
); 


export default App;