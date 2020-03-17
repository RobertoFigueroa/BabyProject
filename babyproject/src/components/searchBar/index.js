import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/event';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const eventCard = ({ onDelete, name, notes, date}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{payload.date}</Card.Subtitle>
                <Card.Text>{notes}</Card.Text>
                <Card.Text>{date}</Card.Text>
                <Card.Link onClick={onDelete}>Delete</Card.Link>
            </Card.Body>
        </Card>       
    );
};


export default eventCard;