import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion';
import { FiPhoneCall } from "react-icons/fi";


const Faq = () => {
     return (
          <>   <div className="banner_area">
               <div className="banner_bg1">
                    <Container className="text-center">
                         <div className="page">
                              <h2 className="page-title">
                              FAQS
                              </h2>
                              <ul className="page_list d-flex justify-content-center ps-0">
                                   <li>
                                        <Link to='/'>Home</Link>
                                   </li>
                                   <li>
                                        <span>FAQS</span>
                                   </li>
                              </ul>
                         </div>
                    </Container>
               </div>
          </div>
               <div className="faq_area spacer">
                    <Container>
                         <div className="section-title title mx-auto text-center mb-5">
                              <h5 className="sub-title">
                                   Our Recent FAQS
                                   <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                             <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                             <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                             <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                             <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                   </svg>
                              </h5>
                              <h2>Frequently Asked Question & Answers Here</h2>
                         </div>
                         <Accordion>
                              <Accordion.Item eventKey="0">
                                   <Accordion.Header>What Happens to my Data if I Cancel?</Accordion.Header>
                                   <Accordion.Body>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                   </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                   <Accordion.Header>What are the Fifferent Types of Marketing Solutions?</Accordion.Header>
                                   <Accordion.Body>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                   </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                   <Accordion.Header>How Often Should i Work on the Digital Marketing?</Accordion.Header>
                                   <Accordion.Body>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                   </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3">
                                   <Accordion.Header>Are Social Media Good for the Business Growth?</Accordion.Header>
                                   <Accordion.Body>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                   </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="4">
                                   <Accordion.Header>What Activities are Done in the Development?</Accordion.Header>
                                   <Accordion.Body>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                   </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="5">
                                   <Accordion.Header>What Happens to my Data if I Cancel?</Accordion.Header>
                                   <Accordion.Body>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                   </Accordion.Body>
                              </Accordion.Item>
                         </Accordion>
                         <div className="cta_help text-center mt-5">
                              <div className="cta_help_bg">
                                   <div className="cta_help_icon">
                                        <FiPhoneCall></FiPhoneCall>
                                   </div>
                                   <h3>
                                        Do you Still have Questions?
                                   </h3>
                                   <p className="cta_faq_text">Call Anytime
                                        <a href="#index">(303) 555-0105</a>
                                   </p>
                              </div>
                         </div>
                    </Container>
               </div>
          </>
     )
}
export default Faq