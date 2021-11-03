import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


//importing contact image and its icons

import img from '../images/nybw.jpg';
import icon1 from '../icons/placeholder.png';
import icon2 from '../icons/phone-call.png';
import icon3 from '../icons/gmail.png';

  
  

export default class Contact extends Component {
    render() {
        return (
            <div>
              <img src={img} alt="communication" class="cont-img"
               style={{width:"100%", height:"88.3vh"}}/>
                <div class="text-block-contact">
                    <center>
                        <Container  className="res-contact">
                            <Row>
                        <h1 className="up"><strong>Contact Us</strong></h1>
                        <p className="font-contact">We'd Love to hear from you. Here's how you can reach us...</p><br/>
                        {/* address */}
                        <Col>
                        <img src={icon1} alt="address" width="40px" height="40px"/>
                        <p class="font"><strong>ADDRESS</strong></p>
                        <p class="font-p"><strong>Beirut, Lebanon</strong></p></Col>
                        {/* phone */}
                        <Col>
                        <img src={icon2} alt="phone" width="40px" height="40px"/>
                        <br/>
                        <p class="font"><strong>TEXT ME</strong></p>
                        <p class="font-p"><strong>+961 70 246 709</strong></p></Col>
                        <br/>
                        {/* email */}
                        <Col>
                        <img src={icon3} alt="address" width="40px" height="40px"/>
                        <br/>
                        <p class="font"><strong>SEND ME AN EMAIL</strong></p>
                        <p class="font-p"><strong>majedmoura99@gmail.com</strong></p></Col>
                        </Row>
                        </Container>
                    </center>
                </div>
            </div>
        );
    }
}