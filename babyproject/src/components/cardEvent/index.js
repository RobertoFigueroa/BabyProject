import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/event';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const eventCard = ({ onDelete, name, notes, date, eventId}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>{notes}</Card.Text>
                <Card.Text>{date}</Card.Text>
                <Card.Link onClick={onDelete(eventId)}>Delete</Card.Link>
            </Card.Body>
        </Card>       
    );
};


export default connect(
    undefined,
    (dispatch, {babies}) => ({
        onDelete(eventId) {
            dispatch(actions.deleteEvent(eventId, babies.selectBaby))
        }
    })
)(eventCard);


