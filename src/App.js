import React from 'react'
import Datos from './components/Datos'
import Eventos from './components/Eventos'
import ApiUsers from './components/ApiUsers'

const App = () => {
  return (
    <div className='container'>
      <h1 className="text-warning">React componente App</h1>

      <h2 className="text-success">Componente Datos</h2>
      {/* <Datos /> */}
      <h2 className="text-danger">Componente Eventos</h2>
      {/* <Eventos /> */}
      <h2 className="text-info">Componente ApiUsers</h2>
      <ApiUsers />
      
    </div>
  )
}

export default App
