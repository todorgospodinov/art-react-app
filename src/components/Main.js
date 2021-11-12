function Main() {
    return (
<section >
         <div id="main_slider" className="section carousel slide banner-main" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#main_slider" data-slide-to="0" className="active"></li>
               <li data-target="#main_slider" data-slide-to="1"></li>
               <li data-target="#main_slider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-caption ">
                              <h1>Welcome to <strong className="color">Our Shop</strong></h1>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                              <a className="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                              <a className="btn btn-lg btn-primary" href="about.html" role="button">About </a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box">
                              <figure><img src="images/boksing-gloves.png" alt="img"/></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-caption ">
                              <h1>Welcome to <strong className="color">Our Shop</strong></h1>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                              <a className="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                              <a className="btn btn-lg btn-primary" href="about.html" role="button">About</a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box ">
                              <figure><img src="images/boksing-gloves.png" alt="img"/></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-caption ">
                              <h1>Welcome to <strong className="color">Our Shop</strong></h1>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                              <a className="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                              <a className="btn btn-lg btn-primary" href="about.html" role="button">About</a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box">
                              <figure><img src="images/boksing-gloves.png" alt="img"/></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className='fa fa-angle-left'></i></a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className='fa fa-angle-right'></i>
            </a>
         </div>
      </section>

    );
}
export default Main;