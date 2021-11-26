import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './MyPackage.css'

const MyPackage = (props) => {
  const { _id, img, placeName, description } = props.mypackage;
  return (
    <div className="container h-50 img-cap">

      <Card className="text-center my-5">
        <Card.Header>
          <img width="50%" src={img} alt="" />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h1>{placeName}</h1>
          </Card.Title>
          <Card.Text>
            <p> {description}</p>
          </Card.Text>
          <Button onClick={() => props.handleDeletePlace(_id)} variant="primary">Delete</Button>
        </Card.Body>

      </Card>
    </div>
  );
};

export default MyPackage;