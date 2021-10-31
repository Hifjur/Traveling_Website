import React from 'react';
import { Col } from 'react-bootstrap';
import './Resort.css'

const Resort = (props) => {
    const { img, name } = props.resort
    return (
        <div>
            <div className="imgHolder resort-img">
                <img className="img-rounded" width="80%" src={img} alt="" />
                <span className="resort-name">{name}</span>
            </div>
        </div>


    );
};

export default Resort;