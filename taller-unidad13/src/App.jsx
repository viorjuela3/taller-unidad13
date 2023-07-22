import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Listado from "./Components/Listado"
import Detalle from "./Components/Detalle"


import './App.css'
import Login from './Components/Login'

function App() {
  

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login></Login>}></Route>
        </Routes>

        <Routes>
          <Route path='/' element={<Listado></Listado>}></Route>
          <Route path='/detalle-personaje/:id' element={<Detalle></Detalle>}></Route>
        </Routes>
        
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
