import { useEffect, useState } from "react";
import ArtList from "../components/ArtList";
import * as artService from '../services/artService';
import { useAuthContext } from '../contexts/AuthContext';


const MyGallery = ({
   
})=> {

   const [arts, setArts] = useState([]);
   const { user } = useAuthContext();

   useEffect(() => {
      artService.getMyArts(user._id)
      .then(result => {
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

export default MyGallery;