import React from 'react';
import Banner from '../Banner/Banner';
import Resorts from '../Resorts/Resorts';
import Services from './../Services/Services';
import OurBlog from './../OurBlog/OurBlog';


const Home = () => {
    return (
        <div>
     
        <Banner></Banner>
        <Services></Services>
        <OurBlog></OurBlog>
        <Resorts></Resorts>


      
        </div>
    );
};

export default Home;