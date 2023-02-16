import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import SmallLogo from '../Logos/SmallLogo.js'
import SignUpForm from './Forms/SignUpForm'

function SignUpPage() {
    
    return (
      <Wrapper>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <SmallLogo />
        <Divider />
        <SignUpForm />
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
