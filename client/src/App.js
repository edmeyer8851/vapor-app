import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components"
import { Helmet } from 'react-helmet'
import ReactDOM from "react-dom";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";
import Routes from "./components/Layout/Routes";

export const ThemeContext = React.createContext(null)

function App() {
  
  const theme = "dark"
  const themeStyle = darkTheme;

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      <Helmet>
        <title>Vapor Games</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/> 
      </Helmet>
      <>
        <Layout theme={theme} user={user} setUser={setUser}>
          <Routes theme={theme} setUser={setUser}/>
        </Layout>
      </>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;