import React, { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ghastly-grave-69025.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (!services.length) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (

        <div className="services mt-3 p-4" id="services">
            
            <h1 className="services-text mt-4">Pick A Place & Start Your Adventure!</h1>
            <Row xs={1} md={4} className="p-5 my-4 container mx-auto g-4">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }


            </Row>
        </div>
    );
};

export default Services;