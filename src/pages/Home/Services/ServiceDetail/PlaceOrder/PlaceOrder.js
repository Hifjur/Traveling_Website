import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../../../../hooks/useAuth';
import './PlaceOrder.css'


const PlaceOrder = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth()
    const { img, name, description } = props.place;
    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/myPackages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })

    };
    return (
        <div className="place-order">
            <h1>PLease Confirm Your Order</h1>
            <img src="" alt="" />

            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={img}  {...register("img")} />
                <input defaultValue={name} {...register("placeName", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea defaultValue={description} {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email}  {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input className="btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;