import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../styles/Button.js'
import FormField from '../../../styles/FormField.js'
import Label from '../../../styles/Label.js'
import Input from '../../../styles/Input.js'
import Error from '../../../styles/Error.js'
import { UserContext } from '../../../context/user.js'

function SignUpForm() {
    
    let navigate = useNavigate()

    const [user, setUser, wallet, setWallet] = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([]);

    const createWallet = (user) => {
      fetch(`wallets`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user.id, balance: 0, last_transaction_amount: 0 })
      })
      .then(r => r.json())
      .then(setWallet)
    }

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, password_confirmation: passwordConfirmation }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
            createWallet(user)
          }).then(navigate('/'))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }

    return (
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="passwordConfirmation">Confirm Password</Label>
            <Input
              type="password"
              id="passwordConfirmation"
              autoComplete="off"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button variant="fill" color="primary" type="submit">Sign Up
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
    )
}

export default SignUpForm
