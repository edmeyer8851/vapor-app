import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { logoLargePNG } from '../../assets'
import BackButton from './styles/BackButton'
import BuyButton from './styles/BuyButton'
import Error from '../../styles/Error'
import { UserContext } from '../../context/user'

function GameDetailPage() {
    const { id } = useParams()

    let navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)

    const [game, setGame] = useState({})
    const [errors, setErrors] = useState([])
    const [owned, setOwned] = useState(false)

    useEffect(() => {
        
        fetch(`/games/${id}`)
        .then(r => r.json())
        .then(setGame).then(() => {
            fetch("/me").then((r) => {
                if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                });
            }})
        })
    }, [])

    useEffect(() => {
        if (user && user.hasOwnProperty('user_games')){
        const ownedTitlesArray = user.user_games.map(usergame => {
            return usergame.game.title
        })
        setOwned(ownedTitlesArray.includes(game.title))}
    }, [user])
    
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
            }).then(setOwned(true))
            .then(() => {
                fetch('/me')
                .then(r => r.json())
                .then(setUser)
                .then(navigate('/'))
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

export default GameDetailPage
