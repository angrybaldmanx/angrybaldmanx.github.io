import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import GameCard from './GameCard';

export default function Downloadlist() {
    const downloadData = useSelector((state) => state.gameData);
    return (
        <div>
            <div className="game-container">
              <h2 className='downloadsTitle'>Your Download List</h2>
                <Row>
                {downloadData && downloadData.map((game, index) => {
                    return (
                        <Col
                        className="mb-6"
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
