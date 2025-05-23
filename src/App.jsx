import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Error405 from './pages/Error405'
import Movil from './pages/Movil'
import Laptop from './pages/Laptop'
import Tienda from './pages/Tienda'
import Detalle from './pages/Detalle'

const App = () => {

  const [darkMode, setDarkMode] = useState('dark')

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.setAttribute('data-bs-theme', !darkMode ? 'dark' : 'light')
  }
  return (
    <BrowserRouter>
      <div className="app">
         <Header darkMode={darkMode} toggleTheme={toggleTheme} />
         <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
           
          <Route path="/movil" element={<Movil />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/detalle/:id/:nombre" element={<Detalle />} />

          <Route path="*" element={<Error405 />} />

         </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App