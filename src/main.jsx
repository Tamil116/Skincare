import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SkincarePage from './Care.jsx'
// import SkincarePage from './Skincare.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SkincarePage />
    {/* <SkincarePage /> */}
  </StrictMode>,
)
