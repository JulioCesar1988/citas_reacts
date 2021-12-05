import React from "react";
import PropType from 'prop-types';



const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Mascota: <span>{cita.mascota}</span>
    </p>
    <p>
      Dueño: <span>{cita.propietario}</span>
    </p>
    <p>
      Fecha: <span>{cita.fecha}</span>
    </p>
    <p>
      Horario: <span>{cita.hora}</span>
    </p>
    <p>
      Sintomas: <span>{cita.sintomas}</span>
    </p>
    <button
      type="button"
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar &times;
    </button>
  </div>
);



// vamos a documentar el componenete y tambien lo va a validar .() el key no se documenta .

Cita.prototype = {

  cita: PropType.object.isRequired,
  eliminarCita: PropType.func.isRequired
  
  }

export default Cita;
