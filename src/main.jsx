import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from "./styles/theme"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { Routes } from './Pages/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
