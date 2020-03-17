import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/baby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './styles.css';

const CreateBabyForm = ({ onSubmit }) => {
    const [value1, changeValue1] = useState('');
    const [value2, changeValue2] = useState('');
    return (

        <Fragment>
                        <Card bg='light'>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre"
                                        value={value1}
                                        onChange={e => changeValue1(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="text"
                                        placeholder="Apellido"
                                        onChange={e=>changeValue2(e.target.value)}
                                        value={value2}
                                        
                                    />
                                </Form.Group>
                                <Button  block='true' variant="primary" type="submit" onClick={
                                    () => onSubmit(value1,value2)
                                }>
                                    Crear
                                </Button>
                            </Form>
                        </Card>
        </Fragment>
    );
};

export default connect(
    undefined,
    dispatch => ({
        onSubmit(value1,value2) {
            dispatch(actions.addBaby(uuidv4(), value1,value2))
        }
    })
)(CreateBabyForm);
