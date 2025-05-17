import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routes from './components/Routes/Routes.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}>

    </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
