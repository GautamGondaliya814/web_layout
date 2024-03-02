import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Team from './Team';
const Becometeachar = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        BECOME A TEACHER
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
               <div className="become_team spacer pb-5">
                    <Container>
                         <Row>
                              <Col lg={7}>
                                   <div className="become_team_content">
                                        <h3 className="become_team_title">
                                             Teacher Rules
                                        </h3>
                                        <ul className='become_team_list'>
                                             <li>There are many variations of passages of Lorem Ipsum available</li>
                                             <li>suffered alteration in some form, by injected humour, or randomised words which don't look</li>
                                             <li>ou need to be sure there isn't anything embarrassing hidden</li>
                                             <li>If you are going to use a passage of Lorem Ipsum,</li>
                                             <li>There are many variations of passages of Lorem Ipsum available</li>
                                        </ul>
                                        <h3 className="become_team_title">
                                             Areas of Expertise
                                        </h3>
                                        <p className='become_team_text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        <h3 className="become_team_title">
                                             Education
                                        </h3>
                                        <p className='become_team_text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                   </div>
                              </Col>
                              <Col lg={5}>
                                   <div className="become_team_form">
                                        <h3 className="become_team_form_title">Apply for Registration</h3>
                                        <form>
                                             <div className="become_team_input">
                                                  <input type="text" placeholder='Your Name' />
                                             </div>
                                             <div className="become_team_input">
                                                  <input type="text" placeholder='Email Address' />
                                             </div>
                                             <div className="become_team_input">
                                                  <input type="text" placeholder='Your Name' />
                                             </div>
                                             <div className="become_team_input">
                                                  <textarea placeholder='Comment'></textarea>
                                             </div>
                                             <div className="banner_btn">
                                                  <div className="btn">
                                                       <a href="#index">
                                                            <span className="eduact-btn"></span>
                                                            Become a Teacher<i class="fa-solid fa-arrow-right-long"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>

               <Team />
          </>
     )
}
export default Becometeachar