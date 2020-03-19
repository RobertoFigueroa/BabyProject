import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/baby';
import * as selectors from '../../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';


const SearchBar = ({ babies,onSelectedBaby }) => {
    return (
        <Fragment>
            <Form.Group controlId="Form.SearchBar">
                <Form.Label>Seleccione a un bebe</Form.Label>
                <Form.Control onChange={e => onSelectedBaby(e.target.value)} as="select">
        
                {babies.map((baby) => <option value={baby.id} key={baby.id}>{baby.name + ' ' + baby.lastName}</option>)}
                </Form.Control>
            </Form.Group>
        </Fragment>
    );
};


export default connect(
    state => ({
        babies: selectors.getBabies(state)
    }),
    dispatch => ({
        onSelectedBaby(id){
            dispatch(actions.selectBaby(id));
            console.log(id)
        }
    })
)(SearchBar);