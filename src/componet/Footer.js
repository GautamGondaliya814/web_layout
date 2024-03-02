import { Col, Container, Row } from "react-bootstrap"
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Footer = () =>{
     return(
          <>
          <div className="footer_area spacer">
               <Container>
                    <Row>
                         <Col xl={4} md={5}>
                              <div className="main_footer">
                                   <a href="#index"><img src={require('../img/logo1.png')} alt="" /></a>
                              </div>
                              <ul className="footer_list ps-0">
                                   <li><span><SlLocationPin></SlLocationPin></span>6391 Elgin St. Celina, Delaware 10299</li>
                                   <li><span><BsTelephone></BsTelephone></span><a href="#contect">(303) 555-0105</a></li>
                                   <li><span><GoMail></GoMail></span><a href="#contect">michael.mitc@example.com</a></li>
                              </ul>
                              <div className="footer_scoial">
                                   <a href="#contect"><i class="fa-brands fa-facebook-f"></i></a>
                                   <a href="#contect"><i class="fa-brands fa-linkedin-in"></i></a>
                                   <a href="#contect"><i class="fa-brands fa-twitter"></i></a>
                                   <a href="#contect"><i class="fa-brands fa-youtube"></i></a>
                              </div>
                         </Col>
                         <Col xl={3} md={4}>
                              <div className="footer_navbar">
                                   <h3>Quick Links</h3>
                                   <ul className="ps-0">
                                        <li><a href="#course">Latest Courses</a></li>
                                        <li><a href="#about">Mission & Vision</a></li>
                                        <li><a href="#services">Our Approach</a></li>
                                        <li><a href="#team">Exclusive Advisors</a></li>
                                        <li><a href="#course">Join a Carrer</a></li>
                                   </ul>
                              </div>
                         </Col>
                         <Col xl={2} md={3}>
                         <div className="footer_navbar">
                                   <h3>Explore</h3>
                                   <ul className="ps-0">
                                        <li><a href="#course">About Us</a></li>
                                        <li><a href="#about">Upcoming Events</a></li>
                                        <li><a href="#services">Blog & News</a></li>
                                        <li><a href="#team">FAQ Qusetion</a></li>
                                        <li><a href="#course">Testimonial</a></li>
                                        <li><a href="#course">Privacy Policy</a></li>
                                   </ul>
                              </div>
                         </Col>
                         <Col xl={3} md={12}>
                              <div className="footer_gallery">
                                   <h3>gallery</h3>
                                   <div className="footer_img_gallery">
                                        <a href="#gallery"><img src={require('../img/footer1.jpeg')} alt="" /></a>
                                        <a href="#gallery"><img src={require('../img/footer2.jpeg')} alt="" /></a>
                                        <a href="#gallery"><img src={require('../img/footer3.jpeg')} alt="" /></a>
                                        <a href="#gallery"><img src={require('../img/footer4.jpeg')} alt="" /></a>
                                        <a href="#gallery"><img src={require('../img/footer5.jpeg')} alt="" /></a>
                                        <a href="#gallery"><img src={require('../img/footer6.jpeg')} alt="" /></a>
                                   </div>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </div>
          </>
     )
}
export default Footer