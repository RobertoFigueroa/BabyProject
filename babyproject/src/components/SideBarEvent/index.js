import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/event';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Button, Form} from 'react-bootstrap';

const EVENTS = [
    "--Seleccione una opción--",
    "Cambio de pañal (Pipi)",
    "Cambio de pañal (Popo)",
    "Pacha",
    "Pecho",
    "Siesta"
];

const SideMenu = ({ createBaby, selectedBabyId}) => {
    const [notes, changeValue] = useState('');
    const [eventType, changeEventType] = useState('');
    return (
        <Fragment>
            <Container>
                <Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Creacion de un nuevo evento</Form.Label>
                    <Form.Control 
                    value={eventType}
                    onChange={e => changeEventType(e.target.value)}
                    as="select">
                    {
                        EVENTS.map((event,i)=> <option key={i} value={event}>{event}</option>)
                    }
                    </Form.Control>
                </Form.Group>
                </Row>
                <Row>
                <Form.Group controlId="Form.notes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control 
                    value={notes} 
                    as="textarea" 
                    rows="3" 
                    onChange={e => changeValue(e.target.value)}/>
                </Form.Group>
                </Row>
                <Row>
                    <Button
                        variant="outline-primary"
                        onClick={
                            () => createBaby(uuidv4(), selectedBabyId, notes, eventType, Date())}
                    >
                    {'Crear'}
                    </Button>
                </Row>
            </Container>
        </Fragment>
    );
};


export default connect(
    state => ({
        selectedBabyId: selectors.getSelectedBaby(state),
    }),
    dispatch => ({
        createBaby(id,babyId,notes,eventType,date){
            dispatch(actions.addEvent(id, babyId, eventType, notes, date))
        }
    })
)(SideMenu);

