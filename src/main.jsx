import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Counter from './components/counter.jsx'
import BgChanger from './components/bgChanger.jsx'
import PassGen from './components/passGen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter/>
    <BgChanger/>
    <PassGen />
  </React.StrictMode>,
)
