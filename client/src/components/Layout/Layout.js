import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { SLayout, SMain } from './styles'

function Layout({children, theme, user, setUser}) {
    return (
        <SLayout>
            <Sidebar theme={theme} user={user} setUser={setUser}/>
            <SMain>{children}</SMain>
        </SLayout>
    )
}

export default Layout
