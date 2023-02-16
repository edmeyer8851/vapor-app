import { createContext, useEffect, useState } from 'react'

const GamesContext = createContext()

const GamesProvider = ({ children }) => {

    const [games, setGames] = useState([])
    const value = [games, setGames]

    useEffect(() => {
        // auto-login
        fetch("/games").then((r) => {
          if (r.ok) {
            r.json().then((games) => {
                setGames(games)
            });
          }
        });
      }, []);

    return (
        <GamesContext.Provider value={value}>{children}</GamesContext.Provider>
    )
}

export { GamesContext, GamesProvider }