import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Course from "./Course"


const Teacherdateail = () => {
     return (
          <>
               <div className="teachet_detail">
                    <div className="banner_area">
                         <div className="banner_bg1">
                              <Container className="text-center">
                                   <div className="page">
                                        <h2 className="page-title">
                                             TEACHER Details
                                        </h2>
                                        <ul className="page_list d-flex justify-content-center ps-0">
                                             <li>
                                                  <Link to='/'>Home</Link>
                                             </li>
                                             <li>
                                                  <span>Teacher</span>
                                             </li>
                                        </ul>
                                   </div>
                              </Container>
                         </div>
                    </div>
                    <div className="team_detail spacer">
                         <Container>
                              <Row>
                                   <Col lg={5}>
                                        <div className="team_detail_img">
                                             <img src={require('../img/team3.jpeg')} alt="" width="100%" />
                                        </div>
                                        <div className="team_detail_shape">
                                             <img src={require('../img/team-details-shape-1.png')} alt="" />
                                        </div>
                                   </Col>
                                   <Col lg={7}>
                                        <div className="team_detail_content">
                                             <h3 className="become_team_title">
                                                  Hello, I’m William Ketty<br></br>
                                                  <span>UI/UX Designer</span>
                                             </h3>
                                             <p className='become_team_text mb-4'>There are many variations of passages of Lorem Ipsum avagtilable, but the majority have suffered alteration in some form, by injected hudfdfmour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent pe</p>
                                             <p className='become_team_text mb-4'>Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo</p>
                                             <div className="team_detail_progress d-flex justify-content-between">
                                                  <h5 className="title">UI / UX Design</h5>
                                                  <span>80%</span>
                                             </div>
                                             <div className="progress">
                                                  <input type="range" disabled max="80" />
                                             </div>
                                             <div className="footer_scoial mt-5">
                                                  <a href="#contect"><i class="fa-brands fa-facebook-f"></i></a>
                                                  <a href="#contect"><i class="fa-brands fa-linkedin-in"></i></a>
                                                  <a href="#contect"><i class="fa-brands fa-twitter"></i></a>
                                                  <a href="#contect"><i class="fa-brands fa-youtube"></i></a>
                                             </div>
                                             <div className="banner_btn">
                                             <div className="btn">
                                                  <a href="#index">
                                                       <span className="eduact-btn"></span>
                                                       Get In Touch<i class="fa-solid fa-arrow-right-long"></i>
                                                  </a>
                                             </div>
                                        </div>
                                        </div>
                                   </Col>
                              </Row>
                         </Container>
                    </div>
                    <Course />
               </div>
          </>
     )
}
export default Teacherdateail