import React from 'react'
import styled from 'styled-components'
import { logoLargePNG } from '../../assets'

function LargeLogo() {
    return (
        <SLogo>
            <img src={logoLargePNG} alt='logo'/>
        </SLogo>
    )
}

export const SLogo = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
    
    img {
        max-width: 25%;
        height: auto;
    }
`

export default LargeLogo
