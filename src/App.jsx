import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './demo'
import Navbar from './Navbar'
import Banner from './Banner'
import Note from './Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello</h1>
        <h2>Welcome</h2>
        <Demo></Demo>
        <Navbar></Navbar>
        <Banner></Banner>
        <Note></Note>
      </div>
    </>
  )
}

export default App
