import React from 'react';
import { Card } from 'react-bootstrap';
import './OurBlog.css'

const OurBlog = () => {
    return (
        <div className="blog-background">

            <h1 className="services-text mt-5 py-5">Our Events</h1>
            <div className="container srotyMedi my-5 py-5" id="events">
                <div className="row">
                    <div className="col-md-6">
                        <img width="70%" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/new-img-1.png" alt="" />
                    </div>
                    <div className="col-md-6 my-4">



                        <Card className="text-center blog-card mb-3">
                            <Card.Header>
                                <img width="30%" src="https://setsail.qodeinteractive.com/wp-content/uploads/2016/09/blog-img-19.jpg" alt="" />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>New Year, New Resolutions!</Card.Title>
                                <Card.Text>
                                    Find a New Years trip that explores Western Europe. There are adventures to choose from, that range in length from 3 days in length, up to 14 days.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="text-center my-4 blog-card">
                            <Card.Header>
                                <img width="30%" src="https://setsail.qodeinteractive.com/wp-content/uploads/2016/09/blog-img-18.jpg" alt="" />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title> Party Ideas!</Card.Title>
                                <Card.Text>
                                    Catch one of the best fireworks displays in the world in London, England. Join thousands of spectators lined along the Thames or in Trafalgar Square as you eagerly await the stroke of midnight. If fireworks don’t interest you, most restaurants or bars will host ticketed events and parties, or you can spend a magical evening ice skating at Winter Wonderland in Hyde Park.
                                </Card.Text>
                            </Card.Body>

                        </Card>

                    </div>

                </div>
            </div>

        </div>

    );
};

export default OurBlog;