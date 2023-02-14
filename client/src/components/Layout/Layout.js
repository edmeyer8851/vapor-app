import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { SLayout, SMain } from './styles'

function Layout({children, theme}) {
    return (
        <SLayout>
            <Sidebar theme={theme}/>
            <SMain>{children}</SMain>
        </SLayout>
    )
}

export default Layout
