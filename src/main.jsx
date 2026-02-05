import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './i18n'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <App />
    
  </StrictMode>,
);
AOS.init({
  offset: 0,
  duration: 1000,
});
