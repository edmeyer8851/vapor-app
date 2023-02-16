import { Link } from "react-router-dom";
import styled from "styled-components"; 
import { v } from '../../styles/variables'

export const SSidebar = styled.div`
    width: ${v.sideBarWidth};
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    position: fixed;
`

export const SLogo = styled.div`
    width: 250px;

    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
`

export const SLinkContainer = styled.div`
    background: transparant;
    border-radius: ${v.borderRadius};
    margin: 16px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({theme}) => theme.bg3}
    }
`

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 24px;
    padding: calc(${v.smSpacing} - 2px) 0;
`
export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px
    }
`

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing}
`

export const SHeader = styled.span`
    background: rgb(30,30,30);
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: block;
    flex: 1;
    font-size: 20px;
    margin-left: 10px;
    border-radius: ${v.borderRadius};
`

export const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background: ${({theme}) => theme.primary};
    color: white;
    margin-right: ${v.mdSpacing}
`

export const SLinkBalance = styled.div`
    font-size: 18px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    /* background: rgb(50,50,50); */
    color: inherit;
    margin-right: ${v.mdSpacing}
`
