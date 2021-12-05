import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import PropType from 'prop-types';



const Formulario = ({crearCita}) => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, actualizarError] = useState(false);

  // funcion a ejecutar cuando esten escribiendo .
  // e es el evento enviado a la funcion
  const actualizarState = (e) => {
    console.log(e.target.value);
    actualizarCita({
      ...cita,
      [e.target.name]: [e.target.value],
    });
  };

  // vamos a extraer los valores

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // enviar formulario / declaramos la funcion .
  const submitCita = (e) => {
    e.preventDefault();
    // Validar
    if (mascota === "") {
      actualizarError(true);
      return;
    }

    // Asignar un ID

    actualizarError(false);
    cita.id = uuid();
    console.log(cita);
    // Crear la Cita
     crearCita(cita);
    // Reinicar el formulario

    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""


    })





  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : (
        "nada"
      )}

      <form onSubmit={submitCita}>
        <label>Nombre</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre de Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sìntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

// vamos a documentar el componenete y tambien lo va a validar .

Formulario.prototype = {

crearCita: PropType.func.isRequired


}


export default Formulario;
