import { Col, Container, Row } from "react-bootstrap"

const Services = () => {
     return (
          <>
               <div className="service_area spacer">
                    <Container>
                         <div className="section-title title mx-auto text-center mb-5">
                              <h5 className="sub-title">
                                   Our Service
                                   <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                             <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                             <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                             <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                             <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                   </svg>
                              </h5>
                              <h2>Creating a Lifelong Learning Best Community</h2>
                         </div>
                         <Row>
                              <Col xl={3} lg={6} md={6}>
                                   <div className="services_item mb-5">
                                        <div className="service_wrapper">
                                             <svg viewBox="0 0 303 117" fill="#F6F6F6" xmlns="http://www.w3.org/2000/svg">
                                                  <circle cx="151" cy="-129" r="246"></circle>
                                             </svg>
                                             <div className="service_icon">
                                                  <i class="fa-solid fa-graduation-cap"></i>
                                             </div>
                                             <h3 className="service_title">
                                                  <a href="#index">Exclusive Coach</a>
                                             </h3>
                                             <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit</p>
                                             <a href="#service" className="service_rm">Read More<i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={3} lg={6} md={6}>
                              <div className="services_item mb-5">
                                        <div className="service_wrapper">
                                             <svg viewBox="0 0 303 117" fill="#F6F6F6" xmlns="http://www.w3.org/2000/svg">
                                                  <circle cx="151" cy="-129" r="246"></circle>
                                             </svg>
                                             <div className="service_icon">
                                             <i class="fa-regular fa-lightbulb"></i>
                                             </div>
                                             <h3 className="service_title">
                                                  <a href="#index">Creative Minds</a>
                                             </h3>
                                             <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit</p>
                                             <a href="#service" className="service_rm">Read More<i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={3} lg={6} md={6}>
                              <div className="services_item mb-5">
                                        <div className="service_wrapper">
                                             <svg viewBox="0 0 303 117" fill="#F6F6F6" xmlns="http://www.w3.org/2000/svg">
                                                  <circle cx="151" cy="-129" r="246"></circle>
                                             </svg>
                                             <div className="service_icon">
                                                  <i class="fa-solid fa-tv"></i>
                                             </div>
                                             <h3 className="service_title">
                                                  <a href="#index">Video Tutorials</a>
                                             </h3>
                                             <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit</p>
                                             <a href="#service" className="service_rm">Read More<i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={3} lg={6} md={6} >
                              <div className="services_item mb-5">
                                        <div className="service_wrapper">
                                             <svg viewBox="0 0 303 117" fill="#F6F6F6" xmlns="http://www.w3.org/2000/svg">
                                                  <circle cx="151" cy="-129" r="246"></circle>
                                             </svg>
                                             <div className="service_icon">
                                                  <i class="fa-solid fa-atom"></i>
                                             </div>
                                             <h3 className="service_title">
                                                  <a href="#index">Worlds Record</a>
                                             </h3>
                                             <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit</p>
                                             <a href="#service" className="service_rm">Read More<i class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Services