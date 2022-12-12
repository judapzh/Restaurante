import React from 'react';
import './estilo.css';
import './img'
 
 function Restaurante(Imagen, Nombre, Descripcion, Direccion) {
  return (
    <div className='container-lg'>
      <div className='row contenedorFilas g-4' id='contenedorFilas'>
        <div className='col-3'>
          <div className='articulo'>
          <img className="imagen"src={`./img/${Imagen}.jpg`}alt="avatar" />
            <div className='articulo-container'>
              <p className='Nombre'>Nombre</p>
              <p className='Descripcion'>Descripcion</p>
              <p className='Direccion'>Direccion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Restaurante;