import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';
import { Card, Button, Badge } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

// importing images (carousels and cards)

import img1 from '../images/sky.jpg';
import img2 from '../images/road.jpg';
import img3 from '../images/coding.jpg';
import img4 from '../images/mac.jpg';
import img5 from '../images/nasa.jpg';
import img6 from '../images/mountain.jpg';
import img7 from '../images/codecoffee.jpg';
import img8 from '../courses/digital.png';
import img9 from '../courses/webdesign.jpg';
import img10 from '../courses/frontend.webp';
import img11 from '../courses/react.jpg';




  
  

export default class Home extends Component {
    render() {
        return (
            <div>
              <Carousel fade>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src= {img1}
                    alt="First slide" height="605px" width="240px"/>
                  <Carousel.Caption className="caption">
                    <h6 class="animate__animated animate__fadeInDown">Inquisitiveness</h6>
                    <p class="animate__animated animate__fadeInUp">The most effective and successful programmers have a talent for figuring out how something is done and finding ways to do it more efficiently</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img
                    className="d-block w-100"
                    src={img2} height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h6 class="animate__animated animate__backInRight">Self-motivation</h6>
                    <p class="animate__animated animate__backInLeft">The ability to motivate yourself will keep you on the path to constant learning and discovery, which is essential for programmers.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src={img3} height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h6 class="animate__animated animate__fadeInUp">Perseverance</h6>
                    <p class="animate__animated animate__fadeInDown">That is why it is so important to be able to handle failure and keep pushing forward if you want to be a programmer</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src={img4} height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h6 class="animate__animated animate__lightSpeedInRight">Proficiency with programming languages</h6>
                    <p class="animate__animated animate__lightSpeedInLeft">Most programmers typically decide on an area of specialization and then learn the programming language that is most appropriate for that field.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src={img5} height="605px" width="240px"
                    alt="Second slide"/>
                  <Carousel.Caption className="caption">
                    <h6 class="animate__animated animate__zoomIn">Learning concepts and applying them to other problems</h6>
                    <p class="animate__animated animate__zoomIn">The ability to learn concepts and apply them to other problems is an essential skill for programmers</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src={img6} height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h6 class="animate__animated animate__slideInUp">Problem-solving capability</h6>
                    <p class="animate__animated animate__slideInDown">Code is often written to solve a problem. You will need to have the ability to identify problems and come up with the most efficient ways to solve them via programming</p>
                  </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src={img7} height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h6 class="animate__animated animate__rollIn">Communication skills</h6>
                    <p class="animate__animated animate__rollIn">Programmers generally spend most of their time working solo in front of a computer</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <br/>

                
                {/**Cards: Courses I've Learned */}



                
                <center>
                <Badge bg="secondary"><h3 className="courses">Courses I've Learned from<br/> Teamtreehouse Technology School</h3></Badge>
                </center>
                <br/>

                <div className="d-flex justify-content-around">
                  <center>
              <Container>
                <Row>
                  <Col>
                <Card style={{ width: '23rem' }} className="cards">
                  <Card.Img variant="top" src={img8} alt="digital-literacy"/>
                  <Card.Body>
                    <Card.Title>Digital Literacy</Card.Title>
                    <Card.Text>
                      learning the basics of how computers work.
                      Digital literacy covers basic computing principles,
                      and foundational knowledge of the Internet and World Wide Web.
                    </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/digital-literacy"
                     target="_blank" rel="noreferrer" className="btn">Learn More</Button>
                  </Card.Body>
                </Card>
                </Col>


              <Col>
                <Card style={{ width: '23rem' }} className="cards">
                  <Card.Img variant="top" src={img9} alt="web-design" style={{ height: '218px'}}/>
                  <Card.Body>
                    <Card.Title>Web Design</Card.Title>
                      <Card.Text>
                        Web design refers to the design of websites that are displayed on the internet.
                        It usually refers to the user experience aspects of website development
                        rather than software development.
                      </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/web-design" target="_blank" rel="noreferrer">Learn More</Button>
                  </Card.Body>
                </Card>
                </Col>
                


                  <Col>
                <Card style={{ width: '23rem' }} className="cards">
                  <Card.Img variant="top" src={img10} alt="front-end development" style={{ height: '214px'}}/>
                  <Card.Body>
                    <Card.Title>Front End Web Development</Card.Title>
                      <Card.Text>
                        Front End Web Development involves web design and building the sites people use every day.
                      </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/front-end-web-development"
                    target="_blank" rel="noreferrer">Learn More</Button>
                  </Card.Body>
                </Card>
                </Col>


              <Col>
                <Card style={{ width: '23rem' }} className="cards">
                  <Card.Img variant="top" src={img11} alt="react"/>
                    <Card.Body>
                      <Card.Title>React</Card.Title>
                      <Card.Text>
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                      </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/learn-react" target="_blank" rel="noreferrer">Learn More</Button>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
                </center>
                </div>
                             
                
                
                <Footer />
            </div>
        );
    }
}