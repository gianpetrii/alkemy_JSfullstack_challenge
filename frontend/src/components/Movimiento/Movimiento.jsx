// Style
import './Movimiento.css';

// Librerias
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';    // para cambiar de Router component


function Movimiento() {

  const navigate = useNavigate(); // uso esto para incertar en la url nueva direccion

  // controla el envio del formulario, tengo que evitar reload y chequear validez de datos
  const submitHandler = (e) => {
      e.preventDefault();
      const concepto = e.target .concepto.value;
      const monto = e.target.monto.value;
      //tengo qie traer date y definir tipo de ingreso tmb
      let tipo = '';
      const fecha = new Date().toLocaleDateString();
      console.log(fecha);

      if (monto === 0) {
          alert("Este valor no genera cambios en el balance");
          return
      } 
      if (monto > 0) {
          tipo = 'ingreso';
          alert("El movimiento fue procesado como un ingreso");
      } else {
        tipo = 'egreso';
        alert("El monto fue procesado como un egreso");
      }

      const nuevoMov = {
        concepto, monto, fecha, tipo
      }
      // axios en post usa (<url de la api>, <objeto con info a enviar>)
      axios
          .post('http://localhost:8080/movimiento', nuevoMov)
          //recibe una rta
          .then(res => {
            // si la respuesta es status 200 entonces digo que fue archivado sin problemas
            if(res.status === 200) {
              alert('Perfecto! Movimiento archivado sin problemas');
            };
          })
          .catch(error => {   // para visualizar errores en la consola y manjearlos con un mensaje
            console.log(error);
            alert("Hubieron errores, por favor reintentar");
          })      
  };


  return (
    <>
      <div className='mov'>
        <h2 className='movTitle'>Registrar Nuevo Movimiento: </h2>
        <form className="movForm" onSubmit={submitHandler}>
          <div >
            <label className="movConceptoLabel">Concepto: </label>
            <input type="text" name='concepto' className="movConceptoInput" required placeholder='Concepto...'/>
            <p className='movAvisos'>El programa toma la fecha actual</p>
          </div>
          <br /><br />
          <div >
            <label className="movMontoLabel">Monto: </label>
            <input type="number" name='monto' className="movMontoInput" required placeholder='Monto...'/>
            <p className='movAvisos'>El programa analiza si es ingreso o egreso</p>
          </div>
          <br /><br />
          <button type="submit" className="movBtn">Submit</button>
        </form>
      </div>
    </>

  );
}

export default Movimiento;