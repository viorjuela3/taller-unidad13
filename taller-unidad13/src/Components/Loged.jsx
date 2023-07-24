import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import "../styles/Loged.css"

export const Loged = (props) => {

    Loged.propTypes = {
        nombre: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired,
      };

  const handleLogout = () => {
    props.handleLogout();
  };



  return (
    <div className='container-loged'>
        
          <p className="bienvenido">Bienvenido {props.nombre}!</p>
        
        
          {/* BOTON SALIR */}
        <button onClick={handleLogout}>
          Salir
        </button>   
    </div> 
  )

}

export default Loged;