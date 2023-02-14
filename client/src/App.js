import React from "react";
import { ThemeProvider } from "styled-components"
import { Helmet } from 'react-helmet'
import { darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";
import Routes from "./components/Layout/Routes";

export const ThemeContext = React.createContext(null)

function App() {
  
  const theme = "dark"
  const themeStyle = darkTheme;

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
        <Layout theme={theme}>
          <Routes theme={theme}/>
        </Layout>
      </>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;