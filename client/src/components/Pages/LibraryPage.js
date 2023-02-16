import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../context/user'
import { Divider, Wrapper } from './StorePage'
import BackButton from './styles/BackButton'
import LargeLogo from '../Logos/LargeLogo'
import LibraryGameCard from './styles/LibraryGameCard'

function LibraryPage() {

    const [user, setUser] = useContext(UserContext)
    let navigate = useNavigate()

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
            <LargeLogo />
            <Divider/>
            <PageTitle>Library</PageTitle>
            <SCardContainer>
                {user && user.user_games.map(usergame => (
                    <LibraryGameCard key={usergame.id} handleDelete={handleDelete} usergame={usergame}/>
                ))}
            </SCardContainer>
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

export default LibraryPage
