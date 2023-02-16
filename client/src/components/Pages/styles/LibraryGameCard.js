import React from 'react'
import styled from 'styled-components'
import { BsPlay } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import Tilt from 'react-parallax-tilt';
import { Divider } from '../StorePage';
import PlayButton from './PlayButton'
import DeleteButton from './DeleteButton'

function LibraryGameCard({usergame, handleDelete}) {
    return (
        <SGameCard key={usergame.game.id}>
            <SGameLabel key={usergame.game.title}>{usergame.game.title}</SGameLabel>
            <Divider/>
            <Tilt style={{width: '365px'}} glareEnable={true} glarePosition="all" glareBorderRadius="24px" scale={1.05}>
                <img src={usergame.game.image} alt={usergame.game.title}></img>
            </Tilt>
            <Divider/>
            <UtilityContainer>
                <PlayButton>
                    <SLinkIcon><BsPlay/></SLinkIcon>
                    <SLinkLabel>Play</SLinkLabel>
                </PlayButton>
                <DeleteButton id={usergame.id} onClick={handleDelete}>
                    <SLinkIcon><AiOutlineDelete style={{fontSize: "20px"}}/></SLinkIcon>
                    <SLinkLabel id={usergame.id}>Uninstall</SLinkLabel>
                </DeleteButton>
            </UtilityContainer>
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
    margin-left: -6px;
    margin-top:15px;
    text-align: center;
    font-size: 24px;
    border-radius: 6px;
    padding-bottom: 30px;
`

const UtilityContainer = styled.div`
    display: flex;
`

const SLinkIcon = styled.div`
    display: flex;
    padding-top: 4px;
    padding-right: 4px;
    

    svg {
        font-size: 24px
    }
`

const SLinkLabel = styled.span`
    display: block;
    padding-top: 3px;
`

export default LibraryGameCard
