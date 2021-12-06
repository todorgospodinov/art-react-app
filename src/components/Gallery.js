import { useEffect, useState } from "react";
import ArtCard from "./ArtCard";
import * as artService from '../services/artService';

function Gallery() {

   const [arts, setArts] = useState([]);

   useEffect(() => {
      artService.getAll().then(result => {
         setArts(result);
      })

   }, []);

   return (
      <section>
         <div className="clothes_main section ">

            <div id="plant" className="section  product">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2><strong className="black"> Our</strong>  Arts</h2>
                           {/* <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span> */}
                        </div>



                     </div>
                  </div>
               </div>
            </div>


            <div className="container">
               <div className="row">
                  
                     {arts.map(a => <ArtCard key={a._id
                     
                     
                     }  art={a} />)}
                  
               </div>
            </div>
         </div>

      </section>

   );

}

export default Gallery;