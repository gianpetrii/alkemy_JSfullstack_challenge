// Archivos
import './Header.css';
import LoginBtn from './LoginBtn/LoginBtn';

// Hooks
import { useEffect, useState } from 'react';

// Librerias
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


function Header() {

    // EVENT LISTENER DE CAMBIO DE TAMAÑO DE PANTALLA
    // tomo estado original y defino hook

    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => {
        const handleRize = () => {  //funcion que vuelve a chequear estado
            setSize([window.innerWidth]);
        };

        //agrego el listener 
        window.addEventListener("resize", handleRize);
        //quito el listener para "clean up on mount"
        return () => {
            window.removeEventListener("resize", handleRize);
        };

    }, []);



    //  DISPLAY DE MENU CUANDO PANTALLA CHICA

    // variable que cambia para indicar display menu chico
    const [showMobileMenu, setShowMobileMenu] = useState("mobileMenuOff");

    // funcion que controla el display del menu
    const HandleMobileMenu = () => {
        if (showMobileMenu == "mobileMenuOff") {
          setShowMobileMenu("mobileMenuOn");
        } else {
            setShowMobileMenu("mobileMenuOff");
        }
    };



    return (
        <>
            <header className="header">
                <figure className="logo-container">
                    <Link to="/"><img src="./reactLogo.png" /></Link>
                </figure>
        
                {/* Responsive Icons */}
                {showMobileMenu === "mobileMenuOff"
                    ?  <FaBars className="hamburger" onClick={HandleMobileMenu}/>
                    : <FaTimes className="hamburger" onClick={HandleMobileMenu}/>
                }

                <ul className={showMobileMenu}>
                    <li><Link className='navItem' to="/" onClick={HandleMobileMenu}>HOME</Link></li>
                    <li><Link className='navItem' to="/movimiento"  onClick={HandleMobileMenu}>NUEVO MOVIMIENTO</Link></li>
                    {/* si width < 940px buscador dentro de lista */}
                    {size <= 940 && <li><LoginBtn /></li>}
                </ul>

                {/* si width > 940px LoginBtn fuera de lista */} 
                {size >= 941 && <LoginBtn />}
                
                
            </header>
        </>
    )
}

export default Header;