import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home from '../images/home.png'
import Email from '../images/email.png'
import Smartwatch from '../images/smartwatch.png'

export default function Navigation() {
    return (
        <Container>
            <Navbar className="nav-links" expand="xxxl" variant="dark" bg="dark">
                    <Link to="/">
                    <img src={Home} className="homeIcon" alt="" />Home
                        </Link>
                    <Link to ="/Downloads">
                        <img src={Smartwatch} className="downloadIcon" alt="" />Stuff to Download
                        </Link>
                    <Link to="/contact">
                        <img src={Email} className="chatIcon" alt=""/>Contact
                        </Link>
            </Navbar>
        </Container>

    )
}