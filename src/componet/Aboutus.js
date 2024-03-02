import { Col, Container, Row } from "react-bootstrap"

const Aboutus = () => {
     return (
          <>
               <div className="about_area spacer">
                    <Container>
                         <Row>
                              <Col xl={6} lg={12}>
                                   <div className="about_one">
                                        <div className="about_one_img">
                                             <img src={require('../img/about1.jpeg')} alt="" width="100%" className="about1" />
                                             <div className="about_two">
                                                  <img src={require('../img/about2.jpeg')} alt="" width="100%" />
                                             </div>
                                             <div className="about_two_fact_content">
                                                  <div className="fact_count">
                                                       +230
                                                       <h3>Awesome Awards</h3>
                                                  </div>
                                             </div>
                                             <div className="about_two_fact">
                                                  <div className="about_two_icon">
                                                       <span><i class="fa-solid fa-trophy"></i></span>
                                                  </div>
                                                  <div className="about_two_icon two">
                                                       <span><i class="fa-regular fa-lightbulb"></i></span>
                                                  </div>
                                             </div>
                                             <div className="shape">
                                                  <div className="shape7">
                                                       <img src={require('../img/shape7.png')} alt="" width="100%" />
                                                  </div>
                                                  <div className="shape8">
                                                       <img src={require('../img/shape8.png')} alt="" width="100%" />
                                                  </div>
                                                  <div className="shape9">
                                                       <img src={require('../img/shape9.png')} alt="" width="100%" />
                                                  </div>
                                                  <div className="shape10">
                                                       <img src={require('../img/shape10.png')} alt="" width="100%" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              </Col>
                              <Col xl={6} lg={12}>
                                   <div className="about_content mt-5">
                                        <div className="section-title">
                                             <h5 className="sub-title">
                                                  About Us
                                                  <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                                       <g clip-path="url(#clip0_324_36194)">
                                                            <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                                            <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                                            <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                                            <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                                       </g>
                                                  </svg>
                                             </h5>
                                             <h2>Establishing a Community that Encourages Lifelong Learning</h2>
                                        </div>
                                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks</p>
                                        <div className="about_box">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 125" class="">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M86 0.0805664H58C25.9675 0.0805664 0 26.048 0 58.0806V79.5806C0 104.157 19.9233 124.081 44.5 124.081H46.5C69.9721 124.081 89 105.053 89 81.5806C89 58.1085 108.028 39.0806 131.5 39.0806H268C282.912 39.0806 295 26.9923 295 12.0806C295 5.45315 289.627 0.0805664 283 0.0805664H89H86Z" class="st-current"></path>
                                             </svg>
                                             <span><i class="fa-solid fa-person-chalkboard text-white"></i></span>
                                             <h4>Flexible Classes</h4>
                                             <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                        </div>
                                        <Row className="mt-5">
                                             <Col lg={6} className="about_list mb-3"><i class="fa-solid fa-check"></i>Free Incoming method</Col>   
                                             <Col lg={6} className="about_list mb-3"><i class="fa-solid fa-check"></i>Provide Best Support</Col>   
                                             <Col lg={6} className="about_list mb-3"><i class="fa-solid fa-check"></i>Expert Many Teacher</Col>   
                                             <Col lg={6} className="about_list mb-3"><i class="fa-solid fa-check"></i>Lifetime access</Col>   
                                        </Row>
                                        <div className="banner_btn">
                                             <div className="btn btn1">
                                                  <a href="#index">
                                                       <span className="eduact-btn"></span>
                                                       Discover More<i class="fa-solid fa-arrow-right-long"></i>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Aboutus