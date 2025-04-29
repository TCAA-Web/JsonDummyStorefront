import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'
import { Global, ThemeProvider } from '@emotion/react'
import { Theme } from './theme'
import { globalStyles } from './globalStyles'
import { CartContextProvider } from './context/CartContext/CartContextProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={globalStyles} />
      <CartContextProvider>
        <RouterProvider router={Router} />
      </CartContextProvider>
    </ThemeProvider>
  </StrictMode>
)
