import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { logoLargePNG } from '../../assets'
import BackButton from './styles/BackButton'
import BuyButton from './styles/BuyButton'
import Error from '../../styles/Error'
import { UserContext } from '../../context/user'
import GameDetails from './styles/GameDetails'

function GameDetailPage() {
    const { id } = useParams()

    let navigate = useNavigate()

    const [user, setUser, wallet, setWallet] = useContext(UserContext)

    const [game, setGame] = useState({})
    const [errors, setErrors] = useState([])

    let owned = false

    useEffect(() => {
        fetch(`/games/${id}`)
        .then(r => r.json())
        .then(setGame)
    }, [])

    
    if (user && user.hasOwnProperty('user_games')){
        const ownedTitlesArray = user.user_games.map(usergame => {
            return usergame.game.title
        })
        owned = ownedTitlesArray.includes(game.title)
    }
    
    const handleBuy = () => {
        if (user && !owned) {
            fetch('/user_games', {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                user_id: user.id,
                game_id: game.id,
                }),
            }).then(owned=true)
            .then(() => {
                fetch('/me')
                .then(r => r.json())
                .then(setUser)
            })
        } else {
            if (user){
                setErrors(["You already own this game."])
            } else { setErrors(["You cannot purchase games unless you're signed in."])}
    }
}

    return (
        <>
        <BackButton onClick={() => navigate('/')}>{"< Back"}</BackButton>
        <Wrapper>
            <SLogo>
                <img src={logoLargePNG} alt='logo'/>
            </SLogo>
            <Divider/>
            <GameTitle>{game.title}</GameTitle>
            <GameDetails game={game}/>
            {!user &&<BuyButton onClick={handleBuy}>Please sign in to purchase</BuyButton>}
            {user &&<BuyButton onClick={handleBuy}>{owned ? "Owned" : "Purchase"}</BuyButton>}
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    width: 1000px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    margin: 40px auto;
    padding: 16px;
`
const Divider = styled.hr`
  border: none;
  border-bottom: 1px ${({theme}) => theme.bg2};
  margin: 8px 0;
`

export const GameTitle = styled.h1`
    background: rgb(45,45,45);
    max-width: 600px;
    /* margin: auto; */
    text-align: center;
    padding: 8px 50px;
    display: block;
    flex: 1;
    font-size: 36px;
    border-radius: 6px;
`

export const SLogo = styled.div`
    display: flex;
    width: auto;

    img {
        max-width: 25%;
        height: auto;
    }
`

export default GameDetailPage
