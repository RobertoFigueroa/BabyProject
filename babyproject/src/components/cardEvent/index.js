import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/event';
import * as selectors from '../../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const eventCard = ({ 
    onDelete, 
    payload,
    selectedBabyId
}) => { 
    return (
      <Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{payload.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{payload.date}</Card.Subtitle>
                    <Card.Text>{payload.notes}</Card.Text>
                    <Card.Link onClick={onDelete(selectedBabyId)}>Delete</Card.Link>
                </Card.Body>
            </Card> 
        </Fragment>      
    );
};

//id que le voy a pasar
export default connect(
    (state,  { id }) => ({
        payload: selectors.getEvent(state, id),
        selectedBabyId: selectors.getSelectedBaby(state)
    }),
    (dispatch, { id }) => ({
        onDelete(selectedBabyId){
            dispatch(actions.deleteEvent(id, selectedBabyId));
        }
    })
)(eventCard);

