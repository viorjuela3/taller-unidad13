import { useEffect,useState } from 'react';
import { todosLosPersonajes } from '../Functions/funciones';
import "../styles/listado.css";


const Inicio = () => {

  const [personajes, setPersonaje] = useState(null);
  const [buscar, setBuscar] = useState("");

  useEffect(()=>{
    todosLosPersonajes(setPersonaje)
  },[])


    const buscador = (e)  => {
        setBuscar(e.target.value)
        console.log(e.target.value)
    
    };

    let resultado = [];
    if (!buscar) {
        resultado = personajes;
    } else {
      resultado = personajes.filter((dato) =>
      dato.name.toLowerCase().includes(buscar.toLocaleLowerCase()));
    }

  return (
    <>
      

      <div>
      <h1>PERSONAJES DE RICK Y MORTY</h1>
      <br />
        <input value={buscar} onChange={buscador} type="text" placeholder='buscar personaje' className='form-control' />
      </div>
    <br></br>


      <div className='contenedor-listado'>


      {personajes !== null ? (
          resultado.map(personaje => (
            

              <div className="card" style={{ width: '18rem' }}  key={personaje.id}>
                 <img src={personaje.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p className="card-text">Este personaje aparece por primera vez en el capítulo {personaje.episode[0].split('/').pop()}</p>
                    <a href={`/detalle-personaje/${personaje.id}`} className="btn btn-primary">Conoce más</a>
                </div>
              </div>   
          
            
          ))
        ) : (
          <>
          <p>cargando personajes</p>
          <div className="spinner-border" role="status">
         <span className="visually-hidden">Loading...</span>
         </div>
          </>
          )}

      </div>    
    </>
  )
}

export default Inicio