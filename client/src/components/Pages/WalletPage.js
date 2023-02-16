import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user'
import { PageTitle } from './LibraryPage'
import { Container, InfoContainer, InfoLabel, InfoValue } from './ProfilePage'
import { Divider, Wrapper } from './StorePage'
import BackButton from './styles/BackButton'
import AddFundsButton from './styles/AddFundsButton'
import AddFundsForm from './Forms/AddFundsForm'
import LargeLogo from '../Logos/LargeLogo'

function WalletPage() {
    
    let navigate = useNavigate()
    const [user, setUser, wallet, setWallet] = useContext(UserContext)

    
    const [addingFunds, setAddingFunds] = useState(false)

    const handleAddFundsClick = () => {
        setAddingFunds(true)
    }

    return (
        <>
            <BackButton onClick={() => navigate('/')}>{"< Back"}</BackButton>
            <Wrapper>
                <LargeLogo />
                <Divider/>
                <PageTitle>Your Wallet</PageTitle>
            </Wrapper>
            {wallet && <>
                <Container>
                    <InfoContainer>
                        <InfoLabel>Current Balance</InfoLabel>
                        <InfoValue>{`$${wallet.balance}`}</InfoValue>
                    </InfoContainer>
                </Container>
                <Divider/>
                <Divider/>
                {addingFunds ?
                    <AddFundsForm setAddingFunds={setAddingFunds} />
                    : <AddFundsButton onClick={handleAddFundsClick} >Add Funds</AddFundsButton>}
                </>
            }
        </>
    )
}


export default WalletPage
