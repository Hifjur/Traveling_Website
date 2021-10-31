import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddNewPlace.css'
import { Col, Container, Row } from 'react-bootstrap';


const AddNewPlace = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    console.log(data)

    axios.post('http://localhost:5000/places', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('added successfully')
          reset();
        }
      })

  };
  return (

    <Container>
      <Row className="my-5">
        <Col>
          <img width="100%" src="http://wordpressboss.com/opb/vtravel-demo/assets/images/about.png" alt="" />
        </Col>
        <Col>
          <h1>Adding More Packages for Travelto</h1>
          <p>We Are Very Happy To serve You guys . Here is Our Exciting packages and also we are going to add more that you can adventure and enjoy your self with your family and friends</p>
          <img width="50%" src="https://img.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg?size=626&ext=jpg" alt="" />
        </Col>
      </Row>
      <Row>
        <h3 className="text-danger mt-5">Add Item</h3>
        <Col className="add-service mb-5 py-2">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

            <input   {...register("img")} placeholder="img url" />
            <input  {...register("name")} placeholder="Name" />
            <textarea  {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="price" />


            <input className="btn-danger visit" type="submit" />
          </form>
        </Col>

      </Row>
    </Container>


  );
};

export default AddNewPlace;