import { Col, Container, Row } from "react-bootstrap"

const Blog = () => {
     return (
          <>
               <div className="blog_arean spacer">
                    <Container>
                         <div className="section-title title mx-auto text-center mb-5">
                              <h5 className="sub-title">
                                   Latest Blog
                                   <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                             <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                             <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                             <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                             <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                   </svg>
                              </h5>
                              <h2>Latest Updates & Articles</h2>
                         </div>
                         <Row>
                              <Col xl={4} md={6}>
                                   <div className="blog_item">
                                        <div className="blog_image">
                                             <img src={require('../img/blog1.jpeg')} alt="" width="100%" />
                                             <a href="#blog"> </a>
                                        </div>
                                        <div className="blog_content">
                                             <div className="blog_meta">
                                                  <div className="blog_cart">
                                                       <a href="#blog">Development</a>
                                                  </div>
                                                  <div className="blog_date">
                                                  26 Mar, 2023
                                                  </div>
                                             </div>
                                             <div className="blog_title">
                                                  <a href="#blog">The Complete Web Developer Guideline 2023</a>
                                             </div>
                                             <div className="blog_meta">
                                                  <div className="blog_author">
                                                       <img src={require('../img/author1.png')} alt="" width="100%" />
                                                       <h5>Darrell Steward</h5>
                                                       <a href="#blog">Fronted Developer</a> 
                                                  </div>
                                                  <a href="#blog" className="blog_rm"><i class="fa-solid fa-arrow-right"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={4} md={6}>
                                   <div className="blog_item">
                                        <div className="blog_image">
                                             <img src={require('../img/blog2.jpeg')} alt="" />
                                             <a href="#blog"> </a>
                                        </div>
                                        <div className="blog_content">
                                             <div className="blog_meta">
                                                  <div className="blog_cart">
                                                       <a href="#blog">Development</a>
                                                  </div>
                                                  <div className="blog_date">
                                                  26 Mar, 2023
                                                  </div>
                                             </div>
                                             <div className="blog_title">
                                                  <a href="#blog">Introducing the Latest Tech Features in your Business</a>
                                             </div>
                                             <div className="blog_meta">
                                                  <div className="blog_author">
                                                       <img src={require('../img/author1.png')} alt="" width="100%" />
                                                       <h5>Darrell Steward</h5>
                                                       <a href="#blog">Fronted Developer</a> 
                                                  </div>
                                                  <a href="#blog" className="blog_rm"><i class="fa-solid fa-arrow-right"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={4} md={6}>
                                   <div className="blog_item">
                                        <div className="blog_image">
                                             <img src={require('../img/blog3.jpeg')} alt="" />
                                             <a href="#blog"> </a>
                                        </div>
                                        <div className="blog_content">
                                             <div className="blog_meta">
                                                  <div className="blog_cart">
                                                       <a href="#blog">Development</a>
                                                  </div>
                                                  <div className="blog_date">
                                                  26 Mar, 2023
                                                  </div>
                                             </div>
                                             <div className="blog_title">
                                                  <a href="#blog">Basic Rules of Running Web Agency Business Solution</a>
                                             </div>
                                             <div className="blog_meta">
                                                  <div className="blog_author">
                                                       <img src={require('../img/author1.png')} alt="" />
                                                       <h5>Darrell Steward</h5>
                                                       <a href="#blog">Fronted Developer</a> 
                                                  </div>
                                                  <a href="#blog" className="blog_rm"><i class="fa-solid fa-arrow-right"></i></a>
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
export default Blog