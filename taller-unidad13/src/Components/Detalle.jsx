import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { unicoPersonaje } from '../Functions/funciones';


const Personaje = () => {
  const params = useParams();
  const [personaje, setPersonaje] = useState (null);
  useEffect(() =>{
    unicoPersonaje(params.id, setPersonaje)
  },[]);
  return (
    <>
    {personaje !== null ? (
      <div>
        <h2>{personaje.name}</h2>
        <img src={personaje.image} alt="" />
        <p>{personaje.name} fue creado el {personaje.created} aparece por primera vez en el capítulo {personaje.episode[0].split('/').pop()}, es provieniente de {personaje.origin.name} también se puede decir que es de especie {personaje.species}</p>
      </div>
    ) : (
      <div className="spinner-border" role="status">
         <span className="visually-hidden">Loading...</span>
      </div>
    )}
    </>
  )
}

export default Personaje;