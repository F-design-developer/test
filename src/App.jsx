import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Thirty from './Thirty'
import Shopall from './Shopall'
import Women from './Women'
import Men from './Men'
import Sale from './Sale'
import About from './About'
import Store from './Store'
import Contact from './Contact'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Thirty />}></Route>
          <Route path='/shopall' element={<Shopall />}></Route>
          <Route path='/women' element={<Women />}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/sale' element={<Sale />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
