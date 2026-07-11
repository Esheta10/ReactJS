import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from '../context/UserContext.jsx'
import StoryContext from '../context/StoryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoryContext>
      <UserContext>
       <App />
      </UserContext>
    </StoryContext>
  </StrictMode>,
)
