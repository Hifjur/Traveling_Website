import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css'
import { Container, Row, Col } from 'react-bootstrap';

import useAuth from './../../../hooks/useAuth';





const Register = () => {
    const {signInUsingGoogle, handleEmailChange, handlePassWordChange, handleRegistration , error} = useAuth();

    return (
      
        
        
<Container fluid="md"  className="login my-5 py-5">
  <Row>
    <Col >
            
    <h2>Register: Create Account</h2>
                <form onSubmit=
                {handleRegistration}>
                    <input className="mb-3" onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required />
                    <br />
                    <input className="mb-3" onBlur={handlePassWordChange} type="password" name="" id="" placeholder="Your Password" required />
                    <br />
                    <input className="mb-3" type="password" name="" id="" placeholder="Re-enter Password" required/>
                    <br />
                    <div> <p className="mt-2 text-danger fw-bold"> {error} </p> </div>
               
                    <input className="input-color" type="submit" value="register" />
                    
                </form>
                <p className="fs-6 fw-bolder">Already have an account? <Link to="/login">Login</Link></p>
                <button onClick={signInUsingGoogle} className="btn-danger">Google Sign In</button>
    </Col>
  </Row>
</Container>
          

        
             
    );
};

export default Register;