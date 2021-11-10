import React from 'react'
import { Card } from 'react-bootstrap';
import Derp from '../images/derp.jpg'
import Mail from '../images/mail.png'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'

export default function Contact() {
    return (
        <div className = "profile-card-container">
            <Card className="profile-card"  expand="xxxl" variant="dark" bg="dark" style={{ width: '45rem' }}>
                <Card.Body>
                <Card.Img variant="left" src={Derp} id="profileImage"/>
                    <Card.Title>Eric Fricke</Card.Title>
                    <h5>Full Stack Developer</h5>
                    <p><a href="mailto:fricke.ea@gmail.com">fricke.ea@gmail.com</a></p>
                    <a href='https://e-fricke.github.io/'><img src ={Mail} height='40' id='profileIcon' alt="Portfolio"></img></a>
                    <a href='https://github.com/e-fricke'><img src ={Github} height='40' id='profileIcon' alt="GitHub"></img></a>
                    <a href='https://www.linkedin.com/in/eric-fricke'><img src ={Linkedin} height='40' id='profileIcon' alt="LinkedIn"></img></a>
                </Card.Body>
            </Card>
        </div>
    )
}
