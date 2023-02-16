import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { logoLargePNG } from '../../assets'
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';
import FormField from '../../styles/FormField.js'
import Label from '../../styles/Label.js'
import Input from '../../styles/Input.js'
import { GamesContext } from '../../context/games'

function StorePage() {

    const [games, setGames] = useContext(GamesContext)
    const navigate = useNavigate()


    // const [games, setGames] = useState([])
    const [search, setSearch] = useState('')
    
    // useEffect(() => {
    //     fetch('/games')
    //     .then(r => r.json())
    //     .then(setGames)
    // }, [])

    let gamesToDisplay = games

    if (search != '') {
        gamesToDisplay = games.filter((game) => 
            game.title.toLowerCase().includes(search.toLowerCase())
        )
    }
    
    return (
        <Wrapper>
            <SLogo>
                <img src={logoLargePNG} alt='logo'/>
            </SLogo>
            <Divider/>
            <SHeader>Charging money for free-to-play games since 2023</SHeader>
            <Divider/>
            <form>
                <FormField>
                    <Label htmlFor="search">Search</Label>
                    <Input
                    type="text"
                    id="search"
                    autoComplete="off"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    />
                </FormField>
            </form>
            <SCardContainer>
                {gamesToDisplay.map(game => (
                    <Tilt key={game.id} scale={1.05} transitionSpeed={2500}>
                        <SGameCard key={game.id} onClick={() => navigate(`/games/${game.id}`)}>
                            <SGameLabel key={game.title}>{game.title}</SGameLabel>
                            <Divider/>
                            <img src={game.image} alt={game.title}></img>
                            <Divider/>
                            <SGamePrice key={game.price}>{`$${game.price}`}</SGamePrice>
                        </SGameCard>
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

export const SLogo = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
    
    img {
        max-width: 25%;
        height: auto;
    }
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

export default StorePage
