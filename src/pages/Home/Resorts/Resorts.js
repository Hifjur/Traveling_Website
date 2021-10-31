import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './Resorts.css'
import useResorts from './../../../hooks/useResorts';
import Resort from './Resort/Resort';

const Resorts = () => {
    const [resorts] = useResorts();
    if (!resorts.length) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <div className="container mx-auto resorts" id="resorts">
            <p className="text-primary">choose Your</p>
            <h1 className="services-text my-5">Winter Resorts {resorts.length}</h1>
            <Container>
                <Row xs={2} md={4} lg={3}>

                    {
                        resorts.map(resort => <Resort resort={resort}></Resort>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Resorts;