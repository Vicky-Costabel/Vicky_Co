import ContenedorPersonajes from './Personajes/ContenedorPersonajes'
import MenuPersonajes from './Personajes/MenuPersonajes'
import React, {useState, useEffect}from 'react'
import {collection, getDocs} from "firebase/firestore"
import {db} from "../../firebase/data"


const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [selectedIndice, setSelectedIndice] = useState(null);
  useEffect(() => {
    const fetchPersonajes = async () => {
      const querySnapshot = await getDocs(collection(db, 'personajes'));
      const personajesData = querySnapshot.docs.map(doc => doc.data());
      setPersonajes(personajesData);
    };
    fetchPersonajes();
  }, []);
  const handleIndiceClick = (indice) => {
    setSelectedIndice(indice);
    indice.class.add('.active')
  };
  return (
    <section id='personajes'>
      <div className='container-pers'>
        <MenuPersonajes personajes={personajes} onIndiceClick={handleIndiceClick} selectedIndice={selectedIndice} />
        <ContenedorPersonajes personajes={personajes} selectedIndice={selectedIndice} />
      </div>
    </section>
  )
}

export default Personajes