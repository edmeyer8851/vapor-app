import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../styles/Button.js'
import FormField from '../../styles/FormField.js'
import Label from '../../styles/Label.js'
import Input from '../../styles/Input.js'
import Error from '../../styles/Error.js'
import { logoMainPNG } from '../../assets'

function SignUpPage({setUser}) {
    let navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([]);
    
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
            r.json().then((user) => setUser(user)).then(navigate('/'));;
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
      }
    
    return (
        <Wrapper>
        <SLogo>

        <img src={logoMainPNG} alt='logo'/>
        </SLogo>
        <Divider />
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
      </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`

const SLogo = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
    
    img {
        max-width: 100%;
        height: auto;
    }
`

const Divider = styled.hr`
  border: none;
  border-bottom: 1px ${({theme}) => theme.bg2};
  margin: 16px 0;
`

const Header = styled.h1`
  color: ${({theme}) => theme.text};
  display: block;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
`

export default SignUpPage
