import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Pagination from 'react-bootstrap/Pagination';

const Blogpage = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        BLOG
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>Blog</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="blog_page spacer">
                    <Container>
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
                         <Row>
                              <Col xl={4} md={6}>
                                   <div className="blog_item">
                                        <div className="blog_image">
                                             <img src={require('../img/blog4.jpg')} alt="" width="100%" />
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
                                                  <a href="#blog">Get a Few Solutions to Hire a Best right Candidate</a>
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
                                             <img src={require('../img/blog5.jpg')} alt="" />
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
                                                  <a href="#blog">When an Unknown Printer took a Galley of Type</a>
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
                                             <img src={require('../img/blog6.jpg')} alt="" />
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
                                                  <a href="#blog">The Generated Orem Ipsum is There fore Always</a>
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
                         <Row>
                              <Col>
                                   <Pagination className="d-flex justify-content-center">
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Next />
                                   </Pagination>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Blogpage