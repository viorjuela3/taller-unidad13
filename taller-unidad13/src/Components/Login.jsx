import { useState, useEffect } from "react";
import "../styles/Login.css";
import { Loged } from "./Loged";

export const Login = () => {
  const [miLogin, setMiLogin] = useState("false");
  const [nombre, setNombre] = useState("");
  const [identidad, setIdentidad] = useState("");
  const [correo, setCorreo] = useState("");
  const [vacio, setVacio] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      document.getElementById("txtcorreo").value = "";
      document.getElementById("txtcorreo").focus();
    }
  }, [error]);
  
  function inicioSesion(e) {
    e.preventDefault();

    let txtnom = document.getElementById("txtnom").value;
    let txtident = document.getElementById("txtident").value;
    let txtcorreo = document.getElementById("txtcorreo").value;

    let nombreValido = txtnom.length > 0;
    let identificacionValida = txtident.length > 0;
    let correoValido = [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(txtcorreo),
      txtcorreo.length > 0,
    ];

    if (!nombreValido || !identificacionValida || !correoValido[1]) {
      setMiLogin("false");
      setVacio(true);
      return;
    } else {
      if (!correoValido[0]) {
        setMiLogin("false");
        setError(true);
        return;
      } else {
          setMiLogin("true");
          document.getElementById("login-container").style.display = "none";
        }
      }
    
    setVacio(false);
    setError(false);
  }

  function handleLogout() {
    setMiLogin("false");
    setNombre("");
    setIdentidad("");
    setCorreo("");
    setVacio(false);
    setError(false);
    document.getElementById("form_login").reset();
    document.getElementById("login-container").style.display = "flex";
  }

  //MAQUETACION DEL FORMULARIO DE REGISTRO

  return (
    <div className="container">
      {/* BACKGROUND Y CONTENEDOR DEL FORMULARIO DE REGISTRO DE LOGIN */}
      <div className="login-container" id="login-container">
        {/* FORMULARIO DE REGISTRO Y LOGIN */}
        <form id="form_login" className="container-form">
          <h1>REGISTRATE</h1>

          {/* INPUT NOBRE */}
          <div className="datos">
            <input
              type="text"
              id="txtnom"
              className="form-control"
              placeholder="NOMBRE"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          {/* INPUT IDENTIFICACION */}
          <div className="datos">
            <input
              type="number"
              id="txtident"
              className="form-control"
              placeholder="Identificación"
              value={identidad}
              onChange={(e) => setIdentidad(e.target.value)}
              required
            />
          </div>

          {/* INPUT CORREO */}
          <div className="datos">
            <input
              type="email"
              id="txtcorreo"
              className="form-control"
              placeholder="ejemplo@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <br />

          {/* BOTON LOGIN */}
          <button
            className="share-button"
            type="submit"
            value="login"
            onClick={inicioSesion}
          >
            <div>
              <p>Login</p>
            </div>
          </button>

          {/* MESAJES DE ALERTA DE ERRORES */}
          {vacio && <p className="error">Todos los campos son obligatorios</p>}
          {error && <p className="error">Correo invalido</p>}
        </form>
      </div>

      {/* ENRUTAMIENTO AL MESAJE DE BIENVENIDO EN EL OMPONENTE Loged, DESPUES DE QUE EL Login SEA CORRECTAMENTE COMPLETADO, Y ENLAZAMIENTO DE PROPS AL COMPONENTE Loged */}
      {miLogin === "true" && (
        <Loged nombre={nombre} handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default Login;
