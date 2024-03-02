import { Col, Container, Row } from "react-bootstrap"
import { BiLogoFacebook, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";

const Team = () => {
     return (
          <>
               <div className="team_area spacer">
                    <Container>
                         <div className="section-title title mx-auto text-center mb-5">
                              <h5 className="sub-title">
                                   Our Team
                                   <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                             <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                             <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                             <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                             <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                   </svg>
                              </h5>
                              <h2>Meet Our Professional Team Members</h2>
                         </div>
                         <Row>
                              <Col lg={4} md={6}>
                                   <div className="team_item">
                                        <div className="team_image">
                                             <img src={require('../img/team1.jpeg')} alt="" />
                                        </div>
                                        <div className="team_content">
                                             <h3 className="team_title">
                                                  <a href="#team">Aleesha Brown</a>
                                             </h3>
                                             <p>Web Developer</p>
                                             <div className="team_scoial">
                                                  <a href="#team"><BiLogoFacebook></BiLogoFacebook></a>
                                                  <a href="#team"><BiLogoLinkedin></BiLogoLinkedin></a>
                                                  <a href="#team"><BiLogoYoutube></BiLogoYoutube></a>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col lg={4} md={6}>
                                   <div className="team_item">
                                        <div className="team_image">
                                             <img src={require('../img/team2.jpeg')} alt="" />
                                        </div>
                                        <div className="team_content">
                                             <h3 className="team_title">
                                                  <a href="#team">Devon Lane</a>
                                             </h3>
                                             <p>UI/UX Designer</p>
                                             <div className="team_scoial">
                                                  <a href="#team"><BiLogoFacebook></BiLogoFacebook></a>
                                                  <a href="#team"><BiLogoLinkedin></BiLogoLinkedin></a>
                                                  <a href="#team"><BiLogoYoutube></BiLogoYoutube></a>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col lg={4} md={6}>
                                   <div className="team_item">
                                        <div className="team_image">
                                             <img src={require('../img/team3.jpeg')} alt="" />
                                        </div>
                                        <div className="team_content">
                                             <h3 className="team_title">
                                                  <a href="#team">Mike Hardson</a>
                                             </h3>
                                             <p>Designer</p>
                                             <div className="team_scoial">
                                                  <a href="#team"><BiLogoFacebook></BiLogoFacebook></a>
                                                  <a href="#team"><BiLogoLinkedin></BiLogoLinkedin></a>
                                                  <a href="#team"><BiLogoYoutube></BiLogoYoutube></a>
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
export default Team