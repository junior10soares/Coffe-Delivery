import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CardContextProvider } from './contexts/CyclesContexts'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/Themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CardContextProvider>
          <Router />
        </CardContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
