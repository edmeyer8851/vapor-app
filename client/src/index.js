import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user';
import { GamesProvider } from './context/games';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <GamesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GamesProvider>
    </UserProvider>
);


