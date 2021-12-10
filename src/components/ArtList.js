import style from './ArtList.module.css';
import ArtCard from "./ArtCard";


const ArtList = ({
   arts
})=> {
   
   return (
      <section>
         <div className="clothes_main section ">
            <div id="plant" className="section  product">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                          <h2><strong className="black"> Our</strong>  Arts</h2>                       
                       </div>
                     </div>
                  </div>
               </div>
            </div>


            <div className="container">
               <div className="row">
               {arts.length > 0
                ? 
                    
                        arts.map(a => <ArtCard key={a._id} art={a} />)
                    
                
                : <p className={style.noArts}>No arts in database!</p>
            }
                     
                  
               </div>
            </div>
         </div>

      </section>

   );

}

export default ArtList;