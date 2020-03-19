import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import CardEvent from '../cardEvent';


const EventBoard = ({ cantEvents, eventsListedById}) => (
        <Fragment>
            <Container>
               {
                   cantEvents === 0 ? (
                       <h1>Aún no existen eventos</h1>
                   ) : (
                       eventsListedById.map(
                           id => (
                               <CardEvent 
                                key={id}
                                id={id}
                               />
                           )
                       )
                   )
               }
            </Container>
        </Fragment>
    );



export default connect(
    state => ({
        cantEvents: selectors.getEventsByBabyId(state,selectors.getSelectedBaby(state)).length,
        eventsListedById: selectors.getEventsByBabyId(state,selectors.getSelectedBaby(state)),
    })
)(EventBoard);