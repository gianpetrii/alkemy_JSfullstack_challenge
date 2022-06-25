import './LoginBtn.css';

// LIbrerias
import { Link } from 'react-router-dom'; 

function LoginBtn() {
  return (
    <>
        <Link to ='/login'><button className='logBtn'>Login/SignUp</button></Link>
    </>
  );
}

export default LoginBtn;