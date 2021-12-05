// Librerias y componenetes importados . 
import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import Footer from './components/Footer';

// me quede en la clase 51   Eliminar Citas del State
function App() {
// Citas en local storege
let citasIniciales = JSON.parse(localStorage.getItem('citas'));

if (!citasIniciales) {
  citasIniciales = [];
}
  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);
// Use Effect para realizar ciertas operaciones cuando el state cambia .
// se agrega un arreglo al final para , para que se ejecute una sola vez 
useEffect ( () =>{

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));


if (citasIniciales) {
  localStorage.setItem('citas',JSON.stringify(citas))
}else{
  localStorage.setItem('citas',JSON.stringify([]));
}

},[citas]);

  // vamos a crear una funcion que tome las citas actuales y las agregue
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };
  // funcion que elimina un cita por su id .
  const eliminarCita = (id) => {
    
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };
  // verificando cantidad de citas en el array
  const titulo =
    citas.length === 0 ? "No hay citas." : "Administrar tus citas.";

  return (
    <Fragment>
      <h2>Administracion de citas 2022 software Julito</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        


        </div>
        <div>

<Footer />
</div>
      </div>
    </Fragment>
  );
}
export default App;
