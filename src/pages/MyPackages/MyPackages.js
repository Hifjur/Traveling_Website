import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Row, Container, } from 'react-bootstrap';
import MyPackage from './MyPackage/MyPackage';
import './MyPackages.css'


const MyPackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://ghastly-grave-69025.herokuapp.com/myPackages')
            .then(res => res.json())
            .then(data => setPackages(data));
    })

    //delete a place

    const handleDeletePlace = id => {
        const proceed = window.confirm('Are You Sure, You Want to Delete?')
        if (proceed) {
            const url = `https://ghastly-grave-69025.herokuapp.com/myPackages/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const restPlaces = packages.filter(place => place._id !== id)
                        setPackages(restPlaces);
                    }
                });
        }
    }

    return (
        <div className="">
            <div className="manage-card-size">
                <Card className="bg-dark text-white">
                    <Card.Img width="50%" src="https://www.mywayturkey.com/Images/Kucuk/treasures-of-the-ancient-turkey--14-days-tour590.jpg" />
                    <Card.ImgOverlay>

                        <Card.Title>
                            <h1 className="text-white fw-bolder image-cap-style">Lets Adventure</h1>
                        </Card.Title>
                        <Card.Text>

                            <p className="text-white fw-bolder image-cap-style-text">Grab your vacation package and enjoy tour with loved one</p>

                        </Card.Text>
                        <Card.Text>
                            <p className="text-white fw-bolder image-cap-style-text">We Are here to Serve You</p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>

            </div>


            <h1 className="my-5"> {packages.length} Packages Booked </h1>
            <Container className="">
                <Row xs={1} md={3} className="mx-auto mb-5">

                    {
                        packages.map(mypackage => <MyPackage key={mypackage._id}
                            mypackage={mypackage}
                            handleDeletePlace={handleDeletePlace}
                        ></MyPackage>)
                    }

                </Row>
            </Container>

        </div>
    );
};

export default MyPackages;