import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel';
const Productcarousel = () => {
     const settings = {
          margin: 30,
          autoplay: true,
          smartSpeed: 600,
          loop: true,
          responsive: {
               0:{
                    items: 1,
                    margin:0,
               },
               425: {
                    items: 1,
                    margin: 0
               },
               768: {
                    items: 2
               },
               1024: {
                    items: 3
               },
               1440: {
                    items: 4,
               }
          }
     };
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        PRODUCTS CAROUSEL
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>Shop</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="product spacer">
                    <Container>
                         <Row>
                              <Col>
                                   <OwlCarousel className='owl-theme' {...settings}>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-1.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Sofa Chair</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-2.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Relax Chair</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-3.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Office Chair</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-4.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Relax Chair</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-5.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Long Stool</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-6.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Round Chair</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-7.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Relax Chair</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="product_item">
                                                  <img src={require('../img/product-8.jpg')} alt="" />
                                                  <div className="product_content pb-5">
                                                       <h4><Link>Boss Sofa</Link></h4>
                                                       <div className="product_price">
                                                            <ins>$25.00</ins>
                                                            <del>$30.00</del>
                                                       </div>
                                                       <div className="course_rating mb-3">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                       </div>
                                                       <Link className='btn1'>Add to Cart</Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </OwlCarousel>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Productcarousel