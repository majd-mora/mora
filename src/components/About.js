import React, { Component } from 'react';
import Footer from './Footer';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';


// importing skills images
import img1 from '../images/lotw.jpg';
import img2 from '../images/marketing.jpeg';
import img3 from '../images/guitar.jpg';
import img4 from '../images/piano.jpg';


export default class About extends Component {
    render() {
        return (
            <div>
              {/*About me Intro*/}
                <Card className="text-center">
                  <Card.Header><h3>About Me</h3></Card.Header>
                  <Card.Body>
                    <Card.Title>Looking For A Web Developer?</Card.Title>
                      <Card.Text>
                      I'M MAJD... Programmer &amp; A Front-End Web Developer who builds Website's Framework using Software Like JavaScript based in Beirut, Lebanon.<br/>
                      I enjoy building everything from small business sites to rich Interactive Web Apps,
                      and also coding on ReactJS and dreaming on ReactJS. Help companies to build complex web applications serving 1,000,000+ users with React and modern technologies.<br/>
                      If you are a Business Seeking a Web Presence or an Employer Looking to Hire, you can get in Touch With me.
                      </Card.Text>
                    <Button href="/contact">Contact Me</Button>
                  </Card.Body>
                </Card>
                

                {/* cards for other skills */}
                <Alert>
                  <center>
                  <h4>Some Other Skills &amp; Experiences</h4>
                  </center>
                </Alert>
                <center style={{margin:"15px"}}>
                <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src={img1} alt="LOTW" style={{ height: '216px'}}/>
                    <Card.Body>
                    <Card.Title>Worked as a waiter and sales man at Lord Of The Wings LEB</Card.Title>
                    <Button href="https://www.instagram.com/lordofthewings_lb/"
                        target="_blank" rel="noreferrer"><strong>Follow LOTW</strong></Button>
                    </Card.Body>
                  </Card>
                </Col>
                ))}

                {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src={img2} alt="Marketing"/>
                    <Card.Body>
                    <Card.Title>Marketing representative</Card.Title>
                  </Card.Body>
                  </Card>
                </Col>
                ))}

                {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card style={{ width: '24rem'}}>
                  <Card.Img variant="top" src={img3} alt="guitar" style={{ height: '216px'}}/>
                  <Card.Body>
                  <Card.Title>Guitarist</Card.Title>
                  </Card.Body>
                  </Card>
                </Col>
                ))}

                {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src={img4} alt="piano"/>
                  <Card.Body>
                  <Card.Title>Pianist</Card.Title>
                  </Card.Body>
                  </Card>
                </Col>
                ))}
                </Row>
                  </center>
                
                
                


                <Footer />
            </div>
        );
    }
}