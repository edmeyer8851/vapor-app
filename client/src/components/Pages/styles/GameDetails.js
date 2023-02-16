import React from 'react'
import styled from 'styled-components'
import { Divider } from '../StorePage'

function GameDetails({game}) {
    return (
        <GameContainer>
                <img src={game.image} alt={game.title}></img>
                <DetailContainer>
                    <DetailLabel>Developer: {game.developer}</DetailLabel>
                    <Divider/>
                    <DetailLabel>Release Date: {game.release_date}</DetailLabel>
                    <Divider/>
                    <DetailLabel>Genre: {game.genre}</DetailLabel>
                    <Divider/>
                    <DetailLabel>Price: ${game.price}</DetailLabel>
                    <Divider/>
                    <DetailDescription>{game.description}</DetailDescription>
                </DetailContainer>
            </GameContainer>
    )
}

const GameContainer = styled.div`
    width: 1000px;
    display: flex;
    
    background: rgb(45,45,45);
    flex-direction: row;
    justify-content: center;
    margin: 40px auto;
    padding: 16px;
    border-radius: 24px;
    gap: 40px;

    img {
        width: 500px;
        border-radius: 24px;
    }
`

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(30,30,30);
    width: 450px;
    border-radius: 24px;
    text-align: left;
    padding-top: 15px;
`

const DetailLabel = styled.span`
    max-width: 400px;
    max-height: 30px;
    text-align: left;
    padding: 0px 10px;
    display: block;
    flex: 1;
    font-size: 20px;
    border-radius: 6px;
`

const DetailDescription = styled.p`
    background: rgb(30,30,30);
    max-width: 400px;
    max-height: 30px;
    text-align: left;
    padding: 0px 10px;
    display: block;
    flex: 1;
    font-size: 12px;
    border-radius: 6px;
`

export default GameDetails
