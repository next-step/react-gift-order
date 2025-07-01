import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.tsx'
=======
import App from './App.tsx'
import '@/styles/global.ts';
>>>>>>> a030a13 (feat: 초기설정)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
