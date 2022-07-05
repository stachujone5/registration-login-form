/* eslint-disable @typescript-eslint/no-non-null-assertion -- Render in root */

import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import { App } from './App'
import { UserProvider } from './contexts/UserContext'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
)
