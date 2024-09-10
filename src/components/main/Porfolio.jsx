import React, {useState, useEffect} from 'react'
import ContenedorPorfolio from './Porfolio/ContenedorPorfolio';
import {db} from "../../firebase/data"
import {collection, getDocs } from "firebase/firestore"

const Porfolio = () => {
 const [porfolio, setPorfolio] = useState([]);

 useEffect(() => {
  const porfolioRef = async () => {
    const qPorfolio = await getDocs(collection(db, 'porfolio'));
    const porfolioData = qPorfolio.docs.map(doc => doc.data());
    setPorfolio(porfolioData)  
  };
  porfolioRef();
 },[])

  return (
    <section id='porfolio'>
      <div className='con-por'>
        <ContenedorPorfolio porfolio={porfolio}/>
      </div>
    </section>
  )
}

export default Porfolio



