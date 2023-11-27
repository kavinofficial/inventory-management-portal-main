import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import { RouterProvider } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

// Redux
import store from './app/store'
import { Provider as ReduxProvider } from 'react-redux'

import theme from './theme'
import router from './routes'
import axios from 'axios'

// HACK: JUST TO SEE IF IT WORKS
window.toast = toast
window.axios = axios

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
