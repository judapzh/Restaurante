import React from 'react';
import  './restaurante';
import './estilo.css';


export const Search = () => {
  return(
    <div className="container-lg">
    <h1>Buscar un restaurante</h1>
    <div className="row">
        <div className="mb-3">
            <label for="txtBusqueda" className="form-label">Escribe el nombre de un restautante</label>
            <input type="text" className="form-control" id="txtBusqueda" placeholder="Frisby"/>
        </div>
    </div>
    <div class="row-1">
        <button type="button" className="btn btn-info btn-sm" onclick="filtrarDatos()">Buscar</button>
    </div>
    
    <div className="row" id="contenedorFilas"></div>
</div>
  )
}
export default Search ;