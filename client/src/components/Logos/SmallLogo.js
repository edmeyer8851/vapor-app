import React from 'react'
import styled from 'styled-components'
import { logoMainPNG } from '../../assets'

function SmallLogo() {
    return (
        <SLogo>
          <img src={logoMainPNG} alt='logo'/>
        </SLogo>
    )
}

const SLogo = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
    
    img {
        max-width: 100%;
        height: auto;
    }
`

export default SmallLogo
