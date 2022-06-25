// Librerias
import axios from 'axios';  // para comunicarme con la api
import { useNavigate, Navigate } from 'react-router-dom';    // para cambiar de Router component

// Style
import './Login.css';

function Login() {

    const navigate = useNavigate(); // uso esto para incertar en la url nueva direccion

    // controla el envio del formulario, tengo que evitar reload y chequear validez de datos
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target .email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' | password === '') {
            alert("Ninguno de los campos puede estar vacio");
            return
        } 
        if (!regexEmail.test(email)) {
            alert("Direcccion de correo electronico invalida");
            return
        }
        //chequeo de login del lado del cliente
        if (email !== 'challenge@alkemy.org' | password !== 'fullstack') {
            alert("Credenciales invalidas");
            return
        }
        // axios en post usa (<url de la api>, <objeto con info a enviar>)
        axios
            .post('http://localhost:8080', { email, password })
            //recibe una rta
            .then(res => {
                alert("Perfecto! Ingresaste sin problemas");
                const tokenRecibido = res.data.token; // obtengo el token de autenticacion de user
                sessionStorage.setItem('token', tokenRecibido);   // guardo el token en el storage de la web como ('<nombre>', <valor>)
                //session solo puede guardar strings, si tengo un array, object --> stringify y viceversa
                navigate('/');
            })        
    };



        // para bloquear el acceso sin estar loggeado anteriormente, redirige a home
        let token = sessionStorage.getItem('token');


    return (
        <>  
            {token && <Navigate to='/'/>}
            <div className=''>
                <h2 className='loginTitle'>Formulario de Login</h2>
                <form className="loginForm" onSubmit={submitHandler}>
                  <div >
                      <label className="loginEmailLabel">Email address: </label>
                      <input type="text" name='email' className="loginEmailInput" required placeholder='Email...'/>
                  </div>
                  <br /><br />
                  <div className="">
                      <label className="loginPassLabel">Password: </label>
                      <input type="password" name='password' className="loginPassInput" placeholder='Password...' required/>
                  </div>
                  <br /><br />
                  <button type="submit" className="loginBtn">Submit</button>
                </form>
            </div>
        </>

    )
}

export default Login;