import React, { Fragment } from 'react';

import SideMenu from '../SideBarEvent';
import SearchBar from '../searchBar';
import EventBoard from '../EventBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';


const EventView = () => {
    return (
        <Fragment>
            <Container>
                <Col>
                    <SearchBar/>
               </Col>
            </Container>
            <Container>
                <Row>
                    <Col sm={8}>
                        <EventBoard/>
                    </Col>
                    <Col sm={4}><SideMenu/></Col>
                </Row>
            </Container>
        </Fragment>

    );
}

export default EventView;