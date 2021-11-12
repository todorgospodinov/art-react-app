import GalleryNavigation from "./GalleryNavigation";

function Gallery() {
   return (

      <section>

         <div class="clothes_main section ">

         <div id="plant" class="section  product">
            <div class="container">
               <div class="row">
                  <div class="col-md-12 ">
                     <div class="titlepage">
                        <h2><strong class="black"> Our</strong>  Arts</h2>
                        {/* <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span> */}
                     </div>
                     <GalleryNavigation/>


                  </div>
               </div>
            </div>
         </div>


            <div class="container">
               <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                     <div class="sport_product">
                        <figure><img src="images/basketball.png" alt="img" /></figure>
                        <h3> $<strong class="price_text">50</strong></h3>
                        <h4>basket ball</h4>
                     </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                     <div class="sport_product">
                        <figure><img src="images/t-shirt.png" alt="img" /></figure>
                        <h3> $<strong class="price_text">50</strong></h3>
                        <h4> T-Shirt</h4>
                     </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                     <div class="sport_product">
                        <figure><img src="images/game.png" alt="img" /></figure>
                        <h3> $<strong class="price_text">50</strong></h3>
                        <h4>Game</h4>
                     </div>
                  </div>



                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                     <div class="sport_product">
                        <figure><img src="images/basketball.png" alt="img" /></figure>
                        <h3> $<strong class="price_text">50</strong></h3>
                        <h4>basket ball</h4>
                     </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                     <div class="sport_product">
                        <figure><img src="images/t-shirt.png" alt="img" /></figure>
                        <h3> $<strong class="price_text">50</strong></h3>
                        <h4>T-Shirt</h4>
                     </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                     <div class="sport_product">
                        <figure><img src="images/game.png" alt="img" /></figure>
                        <h3> $<strong class="price_text">50</strong></h3>
                        <h4>Game</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </section>

   );

}

export default Gallery;