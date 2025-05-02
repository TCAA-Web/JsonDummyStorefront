import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'
import { Global, ThemeProvider } from '@emotion/react'
import { Theme } from './theme'
import { globalStyles } from './globalStyles'
import { CartContextProvider } from './context/CartContext/CartContextProvider'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={globalStyles} />
      <CartContextProvider>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <RouterProvider router={Router} />
        </CookiesProvider>
      </CartContextProvider>
    </ThemeProvider>
  </StrictMode>
)
