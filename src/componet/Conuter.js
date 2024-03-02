import { Col, Container, Row } from "react-bootstrap"

const Conuter = () => {
     return (
          <>
               <div className="counter_area spacer">
                    <Container>
                         <Row>
                              <Col lg={3} md={6}>
                                   <div className="fact_item">
                                        <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="1.5" y="2.00049" width="300" height="177" rx="7" stroke="#4F5DE4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"></rect>
                                        </svg>
                                        <div className="fact_one">
                                             <div className="fact_count">
                                                  <span>30.3K</span>
                                             </div>
                                             <h3>STUDENT ENROLLED</h3>
                                        </div>
                                   </div>
                              </Col>
                              <Col lg={3} md={6}>
                                   <div className="fact_item">
                                        <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="1.5" y="2.00049" width="300" height="177" rx="7" stroke="#4F5DE4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"></rect>
                                        </svg>
                                        <div className="fact_one">
                                             <div className="fact_count">
                                                  <span>40.5k</span>
                                             </div>
                                             <h3>CLASS COMPLETED</h3>
                                        </div>
                                   </div>
                              </Col>
                              <Col lg={3} md={6}>
                                   <div className="fact_item">
                                        <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="1.5" y="2.00049" width="300" height="177" rx="7" stroke="#4F5DE4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"></rect>
                                        </svg>
                                        <div className="fact_one">
                                             <div className="fact_count">
                                                  <span>88.9%</span>
                                             </div>
                                             <h3>SATISFACTION RATE</h3>
                                        </div>
                                   </div>
                              </Col>
                              <Col lg={3} md={6}>
                                   <div className="fact_item">
                                        <svg viewBox="0 0 303 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <rect x="1.5" y="2.00049" width="300" height="177" rx="7" stroke="#4F5DE4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"></rect>
                                        </svg>
                                        <div className="fact_one">
                                             <div className="fact_count">
                                                  <span>6.3+</span>
                                             </div>
                                             <h3>TOP INSTRUCTORS</h3>
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Conuter