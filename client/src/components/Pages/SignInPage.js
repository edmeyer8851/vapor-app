import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../styles/Button.js'
import SmallLogo from '../Logos/SmallLogo.js'
import SignInForm from './Forms/SignInForm.js'

function SignInPage() {
    let navigate = useNavigate()

    return (
      <Wrapper>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <SmallLogo />
        <Divider />
        <SignInForm />
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
