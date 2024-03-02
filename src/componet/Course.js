import { Container, Row } from "react-bootstrap"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { FiHeart } from "react-icons/fi";

const Course = () => {
     const settings = {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          dots: false,
          margin:50,
          responsive:{
               425:{
                   items:1
               },
               768:{
                    items:2
               },
               1024:{
                   items:2
               },
               1440:{
                   items:3
               }
           }
     };
     return (
          <>
               <div className="course_area spacer">
                    <Container>
                         <div className="section-title mb-5">
                              <h5 className="sub-title">
                                   Best Course
                                   <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                             <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                             <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                             <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                             <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                   </svg>
                              </h5>
                              <h2>Featured Course On This Month</h2>
                         </div>
                         <Row>
                              <OwlCarousel className='owl-theme' loop margin={10} nav {...settings}>
                                   <div class='item'>
                                        <div className="course_item">
                                             <div className="course_thumb">
                                                  <img src={require('../img/course2.png')} alt="" />
                                                  <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black"/></svg>
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
                                                            <img src={require('../img/author1.png')} alt=""/>
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
                                   </div>
                                   <div class='item'>
                                   <div className="course_item">
                                             <div className="course_thumb">
                                                  <img src={require('../img/course3.png')} alt="" />
                                                  <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black"/></svg>
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
                                                            <img src={require('../img/author1.png')} alt=""/>
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
                                   </div>
                                   <div class='item'>
                                   <div className="course_item">
                                             <div className="course_thumb">
                                                  <img src={require('../img/course4.png')} alt="" />
                                                  <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black"/></svg>
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
                                                            <img src={require('../img/author1.png')} alt=""/>
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
                                   </div>
                                   <div class='item'>
                                   <div className="course_item">
                                             <div className="course_thumb">
                                                  <img src={require('../img/course5.png')} alt="" />
                                                  <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black"/></svg>
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
                                                            <img src={require('../img/author1.png')} alt=""/>
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
                                   </div>
                                   <div class='item'>
                                   <div className="course_item">
                                             <div className="course_thumb">
                                                  <img src={require('../img/course6.png')} alt="" />
                                                  <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black"/></svg>
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
                                                       <a href="#course">The Special HTML & CSS Bootcamp Edition</a>
                                                  </div>
                                                  <div className="course_bottom">
                                                       <div className="course_author d-flex my-auto">
                                                            <img src={require('../img/author1.png')} alt=""/>
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
                                   </div>
                                   <div class='item'>
                                   <div className="course_item">
                                             <div className="course_thumb">
                                                  <img src={require('../img/course1.png')} alt="" />
                                                  <svg viewBox="0 0 416 276" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="208" cy="-2" rx="279" ry="278" fill="black"/></svg>
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
                                                       <a href="#course">Building Responsive User Interfaces to Implementing</a>
                                                  </div>
                                                  <div className="course_bottom">
                                                       <div className="course_author d-flex my-auto">
                                                            <img src={require('../img/author1.png')} alt=""/>
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
                                   </div>
                              </OwlCarousel>
                              <div className="shape">
                                   <div className="shpae11">
                                        <img src={require('../img/shape11.png')} alt="" />
                                   </div>
                                   <div className="shape12">
                                        <img src={require('../img/shape12.png')} alt="" />
                                   </div>
                              </div>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Course