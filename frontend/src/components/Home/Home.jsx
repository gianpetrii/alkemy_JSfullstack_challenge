// Archivos
import './Home.css';

//Librerias
import axios from 'axios';

// Hooks
import { useEffect, useState } from 'react';



function Home() {

  // creo variables donde guardar los movimientos
  const [movimientos, setMovimientos] = useState([]);

  // traigo de mi api los movimientos
  useEffect(() => {
    const endPoint = 'http://localhost:8080/';
    axios.get(endPoint)
        .then(res => { 
            setMovimientos(res.data); // api devuelve respuesta dentro de "data"
        })
        .catch(error => {   // para visualizar errores en la consola y manjearlos con un mensaje
            console.log(error);
            alert("Hubieron errores, por favor reintentar");
        })
}, [setMovimientos]);

  return (
    <>
      <main>
        <h1 className='tablaTitulo'>Balance: BALANCE</h1>

        <div className='tablaContainer'>
          <table id="balance">
            <tr>
              <th>Concepto</th>
              <th>Tipo</th>
              <th>Monto($)</th>
              <th>Fecha</th>
            </tr>
            {movimientos.map(movimiento => (
              <tr key={movimiento.id}>
                <td>{movimiento.concepto}</td>
                <td>{movimiento.tipo}</td>
                <td>{movimiento.monto}</td>
                <td>{movimiento.fecha}</td>
              </tr>
            ))}
          </table>
        </div>
      </main>
    </>
  );
}

export default Home;