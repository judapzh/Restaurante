import React from 'react';
import Restaurante from './restaurante';


function Listar() {
  return (
     <div>
       <Restaurante
         imagen='ilforno'
         Nombre='ilforno'
         Descripcion='Comida internacional'
         Direccion='calle 50 45 20 Bello Antioquia'
       />
       <Restaurante
         imagen='pampa'
         Nombre='Pampa Argentina'
         Descripcion='Asado tipo argentino'
         Direccion='calle 56 50 40 Bello Antioquia'
       />
       <Restaurante
         imagen='pigasus'
         Nombre='Pigasus'
         Descripcion='Comidas Rapidas'
         Direccion='carrera 52 48 23 Bello Antioquia'
        />
       <Restaurante
         imagen='sushi'
         Nombre='Sushi make'
         Descripcion='Comida oriental'
         Direccion='calle 58 70 15 Bello Antioquia'
       />
     </div>
  );
}
export default Listar;