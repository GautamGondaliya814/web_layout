import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
const Login = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        LOGIN
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>Login</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="login_page spacer">
                    <Container>
                         <div className="login_page_area">
                              <Row>
                                   <Col lg={6}>
                                        <div className="login_page_wrap pe-5 me-5">
                                             <h3>Login</h3>
                                             <form>
                                                  <div className="become_team_input">
                                                       <input type="text" placeholder='Username of email*' />
                                                  </div>
                                                  <div className="become_team_input">
                                                       <input type="text" placeholder='Password*' />
                                                  </div>
                                                  <div className="login_page_checked">
                                                       <div><input type="checkbox" /><label>Remember Me?</label></div>
                                                       <a href="#login">Forgot Passowrd?</a>
                                                  </div>
                                                  <div className="banner_btn">
                                                       <div className="btn">
                                                            <a href="#index">
                                                                 <span className="eduact-btn"></span>
                                                                 Login
                                                            </a>
                                                       </div>
                                                  </div>
                                             </form>
                                        </div>
                                   </Col>
                                   <Col lg={6}>
                                   <div className="login_page_wrap ps-5 ms-5">
                                             <h3>Register</h3>
                                             <form>
                                                  <div className="become_team_input">
                                                       <input type="text" placeholder='Email address' />
                                                  </div>
                                                  <div className="become_team_input">
                                                       <input type="text" placeholder='Password' />
                                                  </div>
                                                  <div className="login_page_checked">
                                                       <div><input type="checkbox" /><label>I Accept Company Privacy Policy</label></div>
                                                  </div>
                                                  <div className="banner_btn">
                                                       <div className="btn">
                                                            <a href="#index">
                                                                 <span className="eduact-btn"></span>
                                                                 Register
                                                            </a>
                                                       </div>
                                                  </div>
                                             </form>
                                        </div>
                                   </Col>
                              </Row>
                         </div>
                    </Container>
               </div>
          </>
     )
}
export default Login