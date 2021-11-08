import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Videoconsole from '../images/videoconsole.png'
import Videogame from '../images/videogame.png'


export default function Banner() {
       return (
        <Container>
            <Navbar className = "nav-banner" expand="xxxl" variant="dark" bg="dark">
            <p><img src={Videoconsole}></img>Free Games, DLCs, Skins, and More
            <br/>
            <img src={Videogame}></img>Updated Daily</p>
            </Navbar>
        </Container>
    )
}
