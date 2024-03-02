import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const Error = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        404 ERROR
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>404 Error</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="error_area spacer">
                    <Container>
                         <div className="erroe_page_content">
                              <div className="error_page_img mx-auto">
                                   <img src={require('../img/4041.png')} alt="" width="100%" />
                              </div>
                              <h4>Oops! Page not Found</h4>
                              <div className="become_team_input">
                                   <input type="text" placeholder='Type Here' />
                              </div>
                              <div className="banner_btn">
                                   <div className="btn">
                                        <a href="#index">
                                             <span className="eduact-btn"></span>
                                             Back To Home<i class="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </>
     )
}
export default Error