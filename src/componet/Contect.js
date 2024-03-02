import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { LuPhoneCall, LuMail } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Contect = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        CONTACT
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>Contact</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="contect_area spacer">
                    <Container>
                         <div className="section-title title mx-auto text-center mb-5">
                              <h5 className="sub-title">
                                   Contact With Us
                                   <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                             <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                             <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                             <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                             <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                   </svg>
                              </h5>
                              <h2>Feel Free to Write us Anytime</h2>
                         </div>
                         <Row>
                              <Col>
                                   <div className="contect_page mx-auto">
                                        <form>
                                             <div className="content_form d-flex">
                                                  <div className="become_team_input contect_input me-3">
                                                       <input type="text" placeholder='Your Name' />
                                                  </div>
                                                  <div className="become_team_input contect_input">
                                                       <input type="text" placeholder='Email Address' />
                                                  </div>
                                             </div>
                                             <div className="content_form d-flex">
                                                  <div className="become_team_input contect_input me-3">
                                                       <input type="text" placeholder='Phone' />
                                                  </div>
                                                  <div className="become_team_input contect_input">
                                                       <input type="text" placeholder='Subject' />
                                                  </div>
                                             </div>
                                             <div className="become_team_input">
                                                  <textarea placeholder='Comment'></textarea>
                                             </div>
                                             <div className="banner_btn text-center">
                                                  <div className="btn">
                                                       <a href="#index">
                                                            <span className="eduact-btn"></span>
                                                            Send a Message<i class="fa-solid fa-arrow-right-long"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
               <div className="contect_info mb-5 pb-5">
                    <Container>
                         <Row>
                              <ul className="contect_info_wrapper">
                                   <li>
                                        <div className="contect_info_icon">
                                             <LuPhoneCall></LuPhoneCall>
                                        </div>
                                        <p>Have any question?</p>
                                        <h4>Free <Link>+ 23 (000)-8050</Link></h4>
                                   </li>
                                   <li className='active'>
                                        <div className="contect_info_icon">
                                             <LuMail></LuMail>
                                        </div>
                                        <p>Have any question?</p>
                                        <h4>Free <Link>+ 23 (000)-8050</Link></h4>
                                   </li>
                                   <li>
                                        <div className="contect_info_icon">
                                             <HiOutlineLocationMarker></HiOutlineLocationMarker>
                                        </div>
                                        <p>Have any question?</p>
                                        <h4>Free <Link>+ 23 (000)-8050</Link></h4>
                                   </li>
                              </ul>
                         </Row>
                    </Container>
               </div>
               <div className="google-map">
               <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" class="google-map__one" allowfullscreen="" width="100%"></iframe>
               </div>
          </>
     )
}
export default Contect