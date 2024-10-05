import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Welcome REACT</h1>
      <Routes>
        <Route path="/log" element={<Login />} ></Route>
        <Route path="/sup" element={<Signup />} ></Route >
        <Route path="/st" element={<StateBasics />} ></Route>
        <Route path="/ct" element={<Counter />} ></Route>
        <Route path="/nm" element={<Name />} ></Route>
        <Route path="/ap" element={<Api />} ></Route>
        <Route path="/pk" element={<Pokemon />} ></Route>
      </Routes>

      

    </>
  )
}

export default App
