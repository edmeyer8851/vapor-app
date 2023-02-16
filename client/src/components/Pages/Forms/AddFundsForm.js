import React, { useContext, useState } from 'react'
import { UserContext } from '../../../context/user'
import {InfoContainer, InfoLabel, Input} from '../../Pages/ProfilePage'
import { Container } from '../../Pages/ProfilePage'
import { Divider, Wrapper } from '../../Pages/StorePage'
import ConfirmFundsButton from '../styles/ConfirmFundsButton'
import Error from '../../../styles/Error.js'
import FormField from '../../../styles/FormField.js'

function AddFundsForm({setAddingFunds}) {
    
    const [user, setUser, wallet, setWallet] = useContext(UserContext)

    const [amount, setAmount] = useState(0)    
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (amount > 0) {
            fetch(`/wallets/${user.id}`, {
                method: 'PATCH',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ last_transaction_amount: parseInt(amount) })
            }).then(r => {
                if (r.ok){
                    r.json().then(wallet => {
                        setWallet(wallet)
                        setErrors([])
                        setAddingFunds(false)
                    })
                } else{
                    r.json().then(err => {
                        setErrors(err.errors)
                    })
                }
            })
        }
    }
    
    return (
        <Wrapper>
            <Container>
                <InfoContainer>
                    <InfoLabel>Amount</InfoLabel>
                    <form id="amount" onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            autoFocus='autofocus'
                            id="amount"
                            autoComplete="off"
                            placeholder="Enter amount"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        
                    </form>
                </InfoContainer>
                <ConfirmFundsButton onClick={handleSubmit} >Confirm</ConfirmFundsButton>
                <Divider />
                <Divider />
                {errors && <FormField>
                    {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                    ))}
                </FormField>}
            </Container>
        </Wrapper>
    )
}

export default AddFundsForm
