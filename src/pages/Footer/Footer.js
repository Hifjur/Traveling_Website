import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">


            <Container className="pt-5">
                <Row md={2}>
                    <Col className="text-white">
                        <h1>Travelto</h1>
                        <h6>Subscribe To Our Newsletter</h6>
                    </Col>
                    <Col xs={6} className="text-white">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="warning" type="submit">
                                Subscribe
                            </Button>
                        </Form>
                    </Col>

                </Row>
                <Row className="mt-5 pt-5">
                    <Col xs>
                        <div className="footer-styling">
                            <h2 className="fw-bolder text-white">Quick Link</h2>
                            <p className="fw-bold text-white">About US </p>
                            <p className="fw-bold text-white">lorem</p>
                            <p className="fw-bold text-white">Contact</p>
                            <p className="fw-bold text-white">places</p>
                        </div>
                    </Col>
                    <Col xs={{ order: 12 }} className="footer-styling">
                        <h2 className="fw-bolder text-white">Contact</h2>
                        <p className="fw-bold text-white">1 222 123 4567</p>
                        <p className="fw-bold text-white">info@Travelto.com</p>
                        <p className="fw-bold text-white">ft 11385</p>
                    </Col>
                    <Col xs={{ order: 1 }}>
                        <h2 className="fw-bolder text-white">Socials</h2>
                        <p className="fw-bold text-white">FaceBook</p>
                        <p className="fw-bold text-white">Instagram</p>
                        <p className="fw-bold text-white">TWitter</p>
                        <p className="fw-bold text-white">Linkdin</p>
                    </Col>
                </Row>
                <p className="text-white fw-bold text-muted my-4">CopyRight 2021</p>
            </Container>

        </div>
    );
};

export default Footer;