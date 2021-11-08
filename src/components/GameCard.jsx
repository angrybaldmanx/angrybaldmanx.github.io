import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setGameData } from '../redux/actions/gameData-actions';

export default function GameCard(props) {
    const dispatch = useDispatch();
    const {thumbnail, title, platforms, open_giveaway, description, worth, end_date, users} = props.game
    return (
        <div className="game-card-container">
            <Card className="game-card"  expand="xxxl" variant="dark" bg="dark" style={{ width: '22rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={thumbnail} />
                    <Card.Title>{title}</Card.Title>
                    <p><b>Value:</b> {worth}<br/>
                    <b>Downloads:</b> {users}<br/>
                    <b>Platform</b>: {platforms}<br/>
                    <b>Valid Until:</b> {end_date}</p>
                    <p>{description}</p>
                    <Button onClick={() => dispatch(setGameData(props.game))} id="button">Add to Downloads</Button>
                    <Button href={open_giveaway} id="button2">Download</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
