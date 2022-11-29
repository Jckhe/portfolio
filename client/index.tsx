import React from 'react';
import {createRoot} from "react-dom/client"
import App from './components/App'

let root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
