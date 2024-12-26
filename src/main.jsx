import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List.jsx'
import RenderList from './RenderList.jsx'
import LoginLogout from './LoginLogout.jsx'
import Modals from './Modals.jsx'
import MouseMoveEffect from './MouseMoveEffect.jsx'
import CounterApp from './CounterApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CounterApp  />
    <LoginLogout/> <br></br>
    <RenderList/>
    <List/>
    <Modals/>
    <MouseMoveEffect/>
  </StrictMode>,
)
