import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/event';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Dropdown, Button} from 'react-bootstrap';


//items son los nombres de los bebes [[id,nombres]]
const searchBar = ({ onClick, onSelected, items}) => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic1">
                            Babies
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.map(
                                item => <Dropdown.Item
                                    key={item[0]}
                                    value={item[1]}
                            >{item[1]}</Dropdown.Item>
                            )}
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row>
                    <Button
                        variant="outline-primary"
                        onClick={onClick}
                    >
                    {'+'}
                    </Button>
                </Row>
            </Container>
        </Fragment>
    );
};


export default searchBar;