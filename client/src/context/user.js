import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [wallet, setWallet] = useState(null)
    const value = [user, setUser, wallet, setWallet]

    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user)
              fetch(`/wallets/${user.id}`)
              .then(r => r.json())
              .then(setWallet)
            });
          }
        })
      }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }