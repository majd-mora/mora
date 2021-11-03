import React, { Component } from 'react';
import { GoLocation } from 'react-icons/go';

// importing footer icons
import icon1 from '../icons/facebook.png';
import icon2 from '../icons/gmail.png';
import icon3 from '../icons/instagram.png';
import icon4 from '../icons/github.png';
import icon5 from '../icons/whatsapp.png';

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/**Icons*/}
                <div class="text-center p-3" style={{background: "black"}}>
                    <h5 style={{color: "white"}}><strong>Get In Touch:</strong></h5>
                    <GoLocation color="white"/><p style={{color: "white"}}>Beirut, Lebanon</p>
                    <a href="https://www.facebook.com/majd.mora.7" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src={icon1} alt="facebook" width="30px" height="30px"/></a>
                    <a href="mailto:majedmoura99@gmail.com" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src={icon2} alt="gmail" width="40px" height="40px"/></a>
                    <a href="https://www.instagram.com/majd.mora/" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src={icon3} alt="instagram" width="32px" height="32px"/></a>
                    <a href="https://github.com/Majd-Mora" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src={icon4} alt="github" width="32px" height="32px"/></a>
                    <a href="https://wa.me/+96170246709" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src={icon5} alt="whatsapp" width="30px" height="30px"/></a>
                    {/* <a href="https://twitter/myUsername" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="./icons/vk.png"/></a>
                    <a href="https://linkedIn/myUsername" target="_blank" rel="noreferrer" style={{margin:"10px"}}><img src="./icons/twitter.png"/></a> */}
                    <br/>
                    <p style={{color: "white"}}><em>© Copyright 2021.<br/>All rights reserved.</em></p>
                </div>
            </div>
        );
    }
}