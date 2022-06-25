// Archivos
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Movimiento from './components/Movimiento/Movimiento';

// Hooks

// Librerias
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movimiento" element={<Movimiento />} />
                <Route path='/login' element={<Login />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

