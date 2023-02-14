import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import StorePage from '../Pages/StorePage'
import LibraryPage from '../Pages/LibraryPage'
import ProfilePage from '../Pages/ProfilePage'
import WalletPage from '../Pages/WalletPage'
import GameDetailPage from '../Pages/GameDetailPage'
import SignInPage from '../Pages/SignInPage'
import SignUpPage from '../Pages/SignUpPage'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' element={<StorePage />}/>
            <Route exact path='/library' element={<LibraryPage />}/>
            <Route exact path='/profile' element={<ProfilePage />}/>
            <Route exact path='/wallet' element={<WalletPage />}/>
            <Route exact path='/games/:id' element={<GameDetailPage />}/>
            <Route exact path='/signIn' element={<SignInPage />} />
            <Route exact path='/signUp' element={<SignUpPage />} />
        </Switch>
    )
}

export default Routes
