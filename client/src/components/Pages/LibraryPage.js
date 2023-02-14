import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logoLargePNG } from '../../assets'
import { UserContext } from '../../context/user'
import { Divider, SLogo, Wrapper } from './StorePage'
import BackButton from './styles/BackButton'
import DeleteButton from './styles/DeleteButton'
import PlayButton from './styles/PlayButton'
import { BsPlay } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'

function LibraryPage() {

    const [user, setUser] = useContext(UserContext)
    const [doneLoading, setDoneLoading] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user)
              setDoneLoading(true)
            });
          }
        });
      }, []);

    const handleDelete = (e) => {
        fetch(`/user_games/${e.target.id}`, {
            method: 'DELETE'
        }).then(() => {
            fetch('/me')
            .then(r => r.json())
            .then(setUser)
        })
    }

    return (
        <>
        <BackButton onClick={() => navigate('/')}>{"< Back"}</BackButton>
        <Wrapper>
            <SLogo>
                <img src={logoLargePNG} alt='logo'/>
            </SLogo>
            <Divider/>
            <PageTitle>Library</PageTitle>
            {doneLoading &&
            <SCardContainer>
                {user.user_games.map(usergame => (
                    <SGameCard key={usergame.game.id}>
                        <SGameLabel key={usergame.game.title}>{usergame.game.title}</SGameLabel>
                        <Divider/>
                        <img src={usergame.game.image} alt={usergame.game.title}></img>
                        <Divider/>
                        <UtilityContainer>
                            <PlayButton>
                                <SLinkIcon><BsPlay/></SLinkIcon>
                                <SLinkLabel>Play</SLinkLabel>
                            </PlayButton>
                            <DeleteButton  onClick={handleDelete}>
                                <SLinkIcon><AiOutlineDelete style={{fontSize: "35px"}}/></SLinkIcon>
                                <SLinkLabel id={usergame.id}>Delete</SLinkLabel>
                            </DeleteButton>
                        </UtilityContainer>
                    </SGameCard>
                ))}
            </SCardContainer>}
        </Wrapper>
        </>
    )
}

const SCardContainer = styled.div`
    display: grid;
    margin-top: 50px;
    margin-left: -300px;
    justify-content: center;
    grid-template-columns: 100px 100px 100px;
    column-gap: 350px;
    row-gap: 50px;
`

export const SLinkIcon = styled.div`
    display: flex;

    svg {
        font-size: 40px
    }
`

export const SLinkLabel = styled.span`
    display: block;
    padding-top: 4px;
`

export const PageTitle = styled.h1`
    background: rgb(45,45,45);
    max-width: 600px;
    margin: auto;
    text-align: left;
    padding: 8px 50px;
    display: block;
    flex: 1;
    font-size: 36px;
    border-radius: 6px;
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
    font-size: 24px;
    border-radius: 6px;
    padding-bottom: 30px;
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

const UtilityContainer = styled.div`
    display: flex;
`

export default LibraryPage
