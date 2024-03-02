import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
const Productdetail = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        PRODUCT DETAILS
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
               <div className="product_detail spacer">
                    <Container>
                         <Row>
                              <Col xl={7} lg={6}>
                                   <div className="product_detail_img">
                                        <img src={require('../img/product-details-1.jpg')} alt="" width="100%" />
                                   </div>
                              </Col>
                              <Col xl={5} lg={6}>
                                   <div className="product_detail_content pt-3">
                                        <div className="product_detail_top d-flex align-items-center">
                                             <h3>Boss Sofa</h3>
                                             <p className='mb-0 h5 ms-5' style={{ color: "#F57005" }}>$10.33</p>
                                        </div>
                                        <div className="course_rating product_rating">
                                             <i class="fa-solid fa-star"></i>
                                             <i class="fa-solid fa-star"></i>
                                             <i class="fa-solid fa-star"></i>
                                             <i class="fa-solid fa-star"></i>
                                             <i class="fa-solid fa-star"></i>
                                             <span>2 Customer Review</span>
                                        </div>
                                        <p className='become_team_text pt-5 mb-3'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.</p>
                                        <p className='become_team_text h5 mb-4' style={{ color: "#697585" }}>REF. 305/639</p>
                                        <p className='become_team_text h5' style={{ color: "#F57005" }}>In stock</p>
                                        <div className="product_detail_quantity d-flex align-items-center">
                                             <h5 style={{ color: "#2A254D" }}>Quantity</h5>
                                             <div class="quantity-box d-flex">
                                                  <button type="button"><i class="fa fa-minus"></i></button>
                                                  <input type="number" placeholder='1' />
                                                  <button type="button"><i class="fa fa-plus"></i></button>
                                             </div>
                                        </div>
                                        <div className="product_detail_btn d-flex flex-wrap">
                                             <div className="banner_btn me-4">
                                                  <div className="btn btn3">
                                                       <a href="#index">
                                                            <span className="eduact-btn"></span>
                                                            Add to wishlist<i class="fa-solid fa-arrow-right-long"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="banner_btn">
                                                  <div className="btn">
                                                       <a href="#index">
                                                            <span className="eduact-btn"></span>
                                                            Add to cart<i class="fa-solid fa-arrow-right-long"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="team_detail_content d-flex ps-0 align-items-center flex-wrap">
                                             <span style={{ color: "#2A254D" }} className='mb-0'>Share with friends</span>
                                             <div className="footer_scoial ps-md-5">
                                                  <a href="#contect"><i class="fa-brands fa-facebook-f"></i></a>
                                                  <a href="#contect"><i class="fa-brands fa-linkedin-in"></i></a>
                                                  <a href="#contect"><i class="fa-brands fa-twitter"></i></a>
                                                  <a href="#contect"><i class="fa-brands fa-youtube"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                         <Row>
                              <Col>
                                   <div className="product_detail_description mt-5">
                                        <h3 className="become_team_title">
                                             Description
                                        </h3>
                                        <p className='become_team_text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor</p>
                                        <div className="about_list mb-3"><i class="fa-solid fa-check"></i>Nam at elit nec neque suscipit gravida.</div>
                                        <div className="about_list mb-3"><i class="fa-solid fa-check"></i>Aenean egestas orci eu maximus tincidunt.</div>
                                        <div className="about_list mb-3"><i class="fa-solid fa-check"></i>Curabitur vel turpis id tellus cursus laoreet.</div>
                                   </div>
                              </Col>
                         </Row>
                         <Row>
                              <Col>
                                   <form>
                                        <h3 className="become_team_title h4 my-5">
                                             Add a Review
                                        </h3>
                                        <div className="content_form d-flex">
                                             <div className="become_team_input contect_input me-3">
                                                  <input type="text" placeholder='Your Name' />
                                             </div>
                                             <div className="become_team_input contect_input">
                                                  <input type="text" placeholder='Email Address' />
                                             </div>
                                        </div>
                                        <div className="become_team_input">
                                             <textarea placeholder='Comment'></textarea>
                                        </div>
                                        <div className="banner_btn">
                                             <div className="btn">
                                                  <a href="#index">
                                                       <span className="eduact-btn"></span>
                                                      Leave a Review<i class="fa-solid fa-arrow-right-long"></i>
                                                  </a>
                                             </div>
                                        </div>
                                   </form>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Productdetail