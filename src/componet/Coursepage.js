import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
const Coursepage = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        COURSE
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>Course</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="course_area spacer">
                    <Container>
                         <Row>
                              <Col xl={4} lg={6}>
                                   <div className="course_item mb-5">
                                        <div className="course_thumb">
                                             <img src={require('../img/course2.png')} alt="" />
                                             <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black" /></svg>
                                             <a href="#course" className="like"><i class="fa-regular fa-heart"></i></a>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                                                  <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z"></path>
                                             </svg>
                                        </div>
                                        <div className="course_content">
                                             <div className="course_time">
                                                  20 Hours
                                             </div>
                                             <div className="course_rating">
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <span>(25 Reviews)</span>
                                             </div>
                                             <div className="course_title">
                                                  <a href="#course">Photography Crash Course for Beginners</a>
                                             </div>
                                             <div className="course_bottom">
                                                  <div className="course_author d-flex my-auto">
                                                       <img src={require('../img/author1.png')} alt="" />
                                                       <div className="ms-2 my-auto">
                                                            <h5>Guy Hawkins</h5>
                                                            <p>Project Manager</p>
                                                       </div>
                                                  </div>
                                                  <div className="course_meta my-auto">
                                                       <h4>$473.00</h4>
                                                       <p>15 Lessons</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={4} lg={6}>
                                   <div className="course_item mb-5">
                                        <div className="course_thumb">
                                             <img src={require('../img/course3.png')} alt="" />
                                             <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black" /></svg>
                                             <a href="#course" className="like"><i class="fa-regular fa-heart"></i></a>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                                                  <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z"></path>
                                             </svg>
                                        </div>
                                        <div className="course_content">
                                             <div className="course_time">
                                                  20 Hours
                                             </div>
                                             <div className="course_rating">
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <span>(25 Reviews)</span>
                                             </div>
                                             <div className="course_title">
                                                  <a href="#course">Sales and Marketing For Online Businesses</a>
                                             </div>
                                             <div className="course_bottom">
                                                  <div className="course_author d-flex my-auto">
                                                       <img src={require('../img/author1.png')} alt="" />
                                                       <div className="ms-2 my-auto">
                                                            <h5>Guy Hawkins</h5>
                                                            <p>Project Manager</p>
                                                       </div>
                                                  </div>
                                                  <div className="course_meta my-auto">
                                                       <h4>$473.00</h4>
                                                       <p>15 Lessons</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={4} lg={6}>
                                   <div className="course_item mb-5">
                                        <div className="course_thumb">
                                             <img src={require('../img/course4.png')} alt="" />
                                             <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black" /></svg>
                                             <a href="#course" className="like"><i class="fa-regular fa-heart"></i></a>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                                                  <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z"></path>
                                             </svg>
                                        </div>
                                        <div className="course_content">
                                             <div className="course_time">
                                                  20 Hours
                                             </div>
                                             <div className="course_rating">
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <span>(25 Reviews)</span>
                                             </div>
                                             <div className="course_title">
                                                  <a href="#course">Management Consultants in Competitive Markets</a>
                                             </div>
                                             <div className="course_bottom">
                                                  <div className="course_author d-flex my-auto">
                                                       <img src={require('../img/author1.png')} alt="" />
                                                       <div className="ms-2 my-auto">
                                                            <h5>Guy Hawkins</h5>
                                                            <p>Project Manager</p>
                                                       </div>
                                                  </div>
                                                  <div className="course_meta my-auto">
                                                       <h4>$473.00</h4>
                                                       <p>15 Lessons</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                         <Row>
                              <Col xl={4} lg={6}>
                                   <div className="course_item mb-5">
                                        <div className="course_thumb">
                                             <img src={require('../img/course5.png')} alt="" />
                                             <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black" /></svg>
                                             <a href="#course" className="like"><i class="fa-regular fa-heart"></i></a>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                                                  <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z"></path>
                                             </svg>
                                        </div>
                                        <div className="course_content">
                                             <div className="course_time">
                                                  20 Hours
                                             </div>
                                             <div className="course_rating">
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <span>(25 Reviews)</span>
                                             </div>
                                             <div className="course_title">
                                                  <a href="#course">The Ultimate Developer Course For Future Learner</a>
                                             </div>
                                             <div className="course_bottom">
                                                  <div className="course_author d-flex my-auto">
                                                       <img src={require('../img/author1.png')} alt="" />
                                                       <div className="ms-2 my-auto">
                                                            <h5>Guy Hawkins</h5>
                                                            <p>Project Manager</p>
                                                       </div>
                                                  </div>
                                                  <div className="course_meta my-auto">
                                                       <h4>$473.00</h4>
                                                       <p>15 Lessons</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={4} lg={6}>
                                   <div className="course_item mb-5">
                                        <div className="course_thumb">
                                             <img src={require('../img/course4.png')} alt="" />
                                             <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black" /></svg>
                                             <a href="#course" className="like"><i class="fa-regular fa-heart"></i></a>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                                                  <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z"></path>
                                             </svg>
                                        </div>
                                        <div className="course_content">
                                             <div className="course_time">
                                                  20 Hours
                                             </div>
                                             <div className="course_rating">
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <span>(25 Reviews)</span>
                                             </div>
                                             <div className="course_title">
                                                  <a href="#course">Management Consultants in Competitive Markets</a>
                                             </div>
                                             <div className="course_bottom">
                                                  <div className="course_author d-flex my-auto">
                                                       <img src={require('../img/author1.png')} alt="" />
                                                       <div className="ms-2 my-auto">
                                                            <h5>Guy Hawkins</h5>
                                                            <p>Project Manager</p>
                                                       </div>
                                                  </div>
                                                  <div className="course_meta my-auto">
                                                       <h4>$473.00</h4>
                                                       <p>15 Lessons</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </Col>
                              <Col xl={4} lg={6}>
                                   <div className="course_item mb-5">
                                        <div className="course_thumb">
                                             <img src={require('../img/course5.png')} alt="" />
                                             <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black" /></svg>
                                             <a href="#course" className="like"><i class="fa-regular fa-heart"></i></a>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                                                  <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z"></path>
                                             </svg>
                                        </div>
                                        <div className="course_content">
                                             <div className="course_time">
                                                  20 Hours
                                             </div>
                                             <div className="course_rating">
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <i class="fa-solid fa-star"></i>
                                                  <span>(25 Reviews)</span>
                                             </div>
                                             <div className="course_title">
                                                  <a href="#course">The Ultimate Developer Course For Future Learner</a>
                                             </div>
                                             <div className="course_bottom">
                                                  <div className="course_author d-flex my-auto">
                                                       <img src={require('../img/author1.png')} alt="" />
                                                       <div className="ms-2 my-auto">
                                                            <h5>Guy Hawkins</h5>
                                                            <p>Project Manager</p>
                                                       </div>
                                                  </div>
                                                  <div className="course_meta my-auto">
                                                       <h4>$473.00</h4>
                                                       <p>15 Lessons</p>
                                                  </div>
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
export default Coursepage