import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../styles/Button.js'
import FormField from '../../styles/FormField.js'
import Label from '../../styles/Label.js'
import Input from '../../styles/Input.js'
import Error from '../../styles/Error.js'
import { logoMainPNG } from '../../assets'
import { UserContext } from '../../context/user.js'

function SignInPage() {
    let navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)

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
            r.json().then((user) => setUser(user)).then(navigate('/'))
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
      }

    return (
      <Wrapper>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <SLogo>
          <img src={logoMainPNG} alt='logo'/>
        </SLogo>
        <Divider />
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
        <Divider />
        <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => navigate('/signUp')}>
              Sign Up
            </Button>
          </p>
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

export default SignInPage
