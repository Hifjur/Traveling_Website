import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  const { _id, img, name, description } = props.service;
  return (
    <Col>
      <Card className="optimize-card">
        <Card.Img variant="top" height="45%" width="50%" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/service/serviceDetail/${_id}`}><Button className="visit mb-5 py-2" variant="dark" >Visit</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;