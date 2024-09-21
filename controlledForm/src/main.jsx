import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App  from './App'
import './Task.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <TaskForm></TaskForm> */}
  <App></App>
  </StrictMode>,
)
