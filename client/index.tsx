import React from 'react';
import {createRoot} from "react-dom/client"
import App from './components/App'
import {theme} from './themes'
import {ThemeProvider} from '@mui/material'

let root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider theme={theme} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
