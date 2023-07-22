import axios from 'axios';


const todosLosPersonajes = async (state) => {
    let allCharacters = [];
  
    let nextPage = 'https://rickandmortyapi.com/api/character';
  
    while (nextPage) {
      const response = await axios.get(nextPage);
      const dato = response.data;
  
      allCharacters = [...allCharacters, ...dato.results];
      nextPage = dato.info.next;
    }
  
    state(allCharacters);
  };
  


const unicoPersonaje = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    state(peticion.data);
}



export {
    todosLosPersonajes,
    unicoPersonaje
};