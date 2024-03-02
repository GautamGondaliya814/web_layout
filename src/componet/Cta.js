import { Col, Container, Row } from "react-bootstrap"

const Cta = () =>{
     return(
          <>
          <div className="cta_area pt-5 mt-5">
               <Container>
                    <div className="cta_bg">
                         <Row>
                              <Col lg={6}>
                                   <h3 className="cta_title">Subscribe to Our Newsletter<br></br> for Daily Updates</h3>
                              </Col>
                              <Col lg={6}>
                                   <form className="cta_mail">
                                        <input type="email" placeholder="Email Address"/>
                                        <div className="banner_btn">
                                             <div className="btn" style={{marginTop:'-27px',marginLeft:'10px'}}>
                                                  <a href="#index">
                                                       <span className="eduact-btn"></span>
                                                            Subscribe
                                                  </a>
                                             </div>
                                        </div>
                                   </form>
                              </Col>
                         </Row>
                    </div>
               </Container>
          </div>
          </>
     )
}
export default Cta