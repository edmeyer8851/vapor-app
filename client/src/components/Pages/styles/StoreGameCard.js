import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Divider } from '../StorePage'

function GameCard({game}) {
    
    const navigate = useNavigate()
    
    return (
        <SGameCard key={game.id} onClick={() => navigate(`/games/${game.id}`)}>
            <SGameLabel key={game.title}>{game.title}</SGameLabel>
            <Divider/>
            <img src={game.image} alt={game.title}></img>
            <Divider/>
            <SGamePrice key={game.price}>{`$${game.price}`}</SGamePrice>
        </SGameCard>
    )
}

const SGameCard = styled.div`
    background: rgb(17,17,17);
    display: flex;
    flex-direction: column;
    padding-left: 17.5px;
    height: 350px;
    width: 400px;
    border-radius: 24px;
    justify-content: center;
    cursor: pointer;

    img{
        width: 365px;
        height: 206px;
        border-radius: 24px;
    }
`

const SGameLabel = styled.h1`
    background: rgb(30,30,30);
    display: block;
    width: 375px;
    height: 20px;
    text-align: center;
    font-size: 20px;
    border-radius: 6px;
    padding-bottom: 25px;
`

const SGamePrice = styled.h1`
    background: rgb(30,30,30);
    display: inline;
    width: 100px;
    height: 20px;
    text-align: center;
    margin-left: 125px;
    font-size: 20px;
    border-radius: 6px;
    padding-bottom: 25px;
`

export default GameCard
