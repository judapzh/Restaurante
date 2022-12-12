import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Listar from './listar';
import Search from './buscar';
import Nuevo from './nuevo';
import Navbar from './navbar';


function MainApp() {
  return (
     <div>
       <Router>
        <Routes>
          <Navbar/>
          <Route exact path='Restaurantes' element={<Listar/>}/>
          <Route path='Agregar Restaurante' element={<Nuevo/>}/>
          <Route path='Buscar' element={<Search/>}/>
          </Routes>
        </Router>         
     </div> 
  )
}

export default MainApp;