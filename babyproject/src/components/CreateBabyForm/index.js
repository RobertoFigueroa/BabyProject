import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/baby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, Container } from 'react-bootstrap';
import './styles.css';
import { Link } from 'react-router-dom';

const CreateBabyForm = ({ onSubmit }) => {
    const [value1, changeValue1] = useState('');
    const [value2, changeValue2] = useState('');
    return (

        <Fragment>
            <Container >
                <Card bg='light' >
                    <Card.Title>Ingreso de un nuevo bebe</Card.Title>
                    <Form>
                        <Form.Group controlId="FormName">
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                value={value1}
                                onChange={e => changeValue1(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="FormLastName">
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                onChange={e=>changeValue2(e.target.value)}
                                value={value2}
                                
                            />
                        </Form.Group>
                        <Link to='/eventview'>
                            <Button  block='true' variant="primary" onClick={
                                () => onSubmit(value1,value2)
                            }>
                                Crear
                            </Button>
                        </Link>
                    </Form>
                </Card>
            </Container>
        </Fragment>
    );
};

export default connect(
    undefined,
    dispatch => ({
        onSubmit(value1,value2) {
            const id = uuidv4()
            dispatch(actions.addBaby(id, value1,value2))
            dispatch(actions.selectBaby(id))
        }
    })
)(CreateBabyForm);
