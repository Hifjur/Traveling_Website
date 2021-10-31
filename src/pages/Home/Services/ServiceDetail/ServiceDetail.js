import React, { useState, useEffect } from 'react';
import { Button, Card, Placeholder } from 'react-bootstrap';
import { useParams } from 'react-router';
import PlaceOrder from './PlaceOrder/PlaceOrder';


const ServiceDetail = () => {
    const [place, setPlace] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `https://ghastly-grave-69025.herokuapp.com/places/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])
    return (
        <div>

            <Card className="text-center container mx-auto">
                <Card.Header>
                    <img width="100%" src={place.img} alt="" />
                </Card.Header>
                <Card.Body>
                    <Card.Title>{place.name}</Card.Title>
                    <Card.Text>
                        <p>{place.price} $ </p>
                        <p>{place.days}</p>

                        {place.description}

                    </Card.Text>

                </Card.Body>

            </Card>
            <PlaceOrder key={place._id} place={place}></PlaceOrder>
        </div>
    );
};

export default ServiceDetail;