import { useEffect, useState } from "react";

import * as artService from '../services/artService';
import ArtList from "./ArtList";
import style from './Gallery.module.css';



const Gallery = ({
   
})=> {

   const [arts, setArts] = useState([]);

   useEffect(() => {
      artService.getAll().then(result => {
         setArts(result);
      })
      .catch(err => {
          console.log(err);
      })

   }, []);

   return (
      <section>

<ArtList arts={arts}/>
       

      </section>

   );

}

export default Gallery;