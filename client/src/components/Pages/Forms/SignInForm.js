import React, { useContext, useState } from 'react'
import Label from '../../../styles/Label.js'
import Input from '../../../styles/Input.js'
import Error from '../../../styles/Error.js'
import Button from '../../../styles/Button.js'
import { UserContext } from '../../../context/user.js'
import { useNavigate } from 'react-router-dom'
import FormField from '../../../styles/FormField.js'

function SignInForm() {
    
    let navigate = useNavigate()

    const [user, setUser, wallet, setWallet] = useContext(UserContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user)
              fetch(`/wallets/${user.id}`)
              .then(r => r.json())
              .then(setWallet)
            }).then(navigate('/'))
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
      }
    
    return (
        <form onSubmit={handleSubmit}>
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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button variant="fill" color="primary" type="submit">Login
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

export default SignInForm
