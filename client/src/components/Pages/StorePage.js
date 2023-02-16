import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt';
import { GamesContext } from '../../context/games'
import GameCard from './styles/StoreGameCard';
import LargeLogo from '../Logos/LargeLogo';
import SearchForm from './Forms/SearchForm'

function StorePage() {

    const [games, setGames] = useContext(GamesContext)

    const [search, setSearch] = useState('')
    
    let gamesToDisplay = games

    if (search != '') {
        gamesToDisplay = games.filter((game) => 
            game.title.toLowerCase().includes(search.toLowerCase())
        )
    }
    
    return (
        <Wrapper>
            <LargeLogo />
            <Divider/>
            <SHeader>Charging money for free-to-play games since 2023</SHeader>
            <Divider/>
            <SearchForm search={search} setSearch={setSearch}/>
            <SCardContainer>
                {gamesToDisplay.map(game => (
                    <Tilt key={game.id} scale={1.05} transitionSpeed={2500}>
                        <GameCard game={game}/>
                    </Tilt>
                ))}
            </SCardContainer>
        </Wrapper>
    )
}

export const Wrapper = styled.section`
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px auto;
    padding: 16px;
`

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px ${({theme}) => theme.bg2};
  margin: 8px 0;
`

export const SHeader = styled.span`
    background: rgb(15,15,15);
    max-width: 620px;
    margin: auto;
    text-align: center;
    padding: 8px 50px;
    display: block;
    flex: 1;
    font-size: 20px;
    border-radius: 24px;
`

const SCardContainer = styled.div`
    display: grid;
    margin-top: 50px;
    margin-left: -300px;
    justify-content: center;
    grid-template-columns: 100px 100px 100px;
    column-gap: 350px;
    row-gap: 50px;
`

export default StorePage
