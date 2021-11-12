import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import GameCard from './GameCard'

export default function GameList() {
    const [gameData, setGameData] = useState([])
    const getGames = () => {
                axios.get(`https://gamerpower.p.rapidapi.com/api/giveaways`, {
                    params: {'sort-by': 'date'},
                    headers: {
                        'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
                        'x-rapidapi-key': 'd0ceb973c3msh8032e01f698857ap10d752jsn88046a5dd72d'
                    }
                })
                    .then((res) => res.data)
                    .then((data) => {
                        return setGameData(data)
                    });
    };
    
    useEffect(() => {
        getGames()
    },[])

    return (
        <div>
            <div className="game-container">
                <Row >
                {gameData && gameData.map((game, index) => {
                    return (
                        <Col
                        key={index}>
                        <GameCard game={game} />
                    </Col>
                    )
                })}
                </Row>
            </div>
        </div>
    )
}
