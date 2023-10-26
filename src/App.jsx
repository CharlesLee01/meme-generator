import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '../components/Header.jsx'
import Meme from '../components/Meme.jsx'

import './App.css'

function App() {

  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App
