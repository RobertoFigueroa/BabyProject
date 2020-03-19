import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/baby';
import * as selectors from '../../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchBar = ({ babies,onSelectedBaby }) => {
    return (
        <Fragment>
            <Container class="align-middle">
                <Row>
                    <Col>
                        <Form.Group controlId="Form.SearchBar">
                            <Form.Label>Seleccione a un bebe</Form.Label>
                            <Form.Control onChange={e => onSelectedBaby(e.target.value)} as="select">
                    
                            {babies.map((baby) => <option value={baby.id} key={baby.id}>{baby.name + ' ' + baby.lastName}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col >
                        <Link to='/'>
                            <Button   variant="success">
                                {'+'}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
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