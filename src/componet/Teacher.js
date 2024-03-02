import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel';
import { BiLogoFacebook, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";

const Teacher = () => {
     const settings = {
          margin:30,
          autoplay:true,
          smartSpeed:700,
          loop:true,
          responsive: {
               425: {
                    items: 1,
                    margin:0
               },
               768: {
                    items: 2
               },
               1024: {
                    items: 3
               },
               1440: {
                    items: 3,
               }
          }
     };
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        TEACHER
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
               <div className="team spacer">
                    <Container>
                         <Row>
                              <Col>
                                   <OwlCarousel className='owl-theme' {...settings}>
                                        <div class='item'>
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
                                        </div>
                                        <div class='item'>
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
                                        </div>
                                        <div class='item'>
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
                                        </div>
                                        <div class='item'>
                                             <div className="team_item">
                                                  <div className="team_image">
                                                       <img src={require('../img/team4.jpg')} alt="" />
                                                  </div>
                                                  <div className="team_content">
                                                       <h3 className="team_title">
                                                            <a href="#team">David Cooper</a>
                                                       </h3>
                                                       <p>Digital Markter</p>
                                                       <div className="team_scoial">
                                                            <a href="#team"><BiLogoFacebook></BiLogoFacebook></a>
                                                            <a href="#team"><BiLogoLinkedin></BiLogoLinkedin></a>
                                                            <a href="#team"><BiLogoYoutube></BiLogoYoutube></a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="team_item">
                                                  <div className="team_image">
                                                       <img src={require('../img/team5.jpg')} alt="" />
                                                  </div>
                                                  <div className="team_content">
                                                       <h3 className="team_title">
                                                            <a href="#team">Christine Eve</a>
                                                       </h3>
                                                       <p>Ceo & Founder</p>
                                                       <div className="team_scoial">
                                                            <a href="#team"><BiLogoFacebook></BiLogoFacebook></a>
                                                            <a href="#team"><BiLogoLinkedin></BiLogoLinkedin></a>
                                                            <a href="#team"><BiLogoYoutube></BiLogoYoutube></a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="team_item">
                                                  <div className="team_image">
                                                       <img src={require('../img/team6.jpg')} alt="" />
                                                  </div>
                                                  <div className="team_content">
                                                       <h3 className="team_title">
                                                            <a href="#team">Sarah Albert</a>
                                                       </h3>
                                                       <p>Senior Designer</p>
                                                       <div className="team_scoial">
                                                            <a href="#team"><BiLogoFacebook></BiLogoFacebook></a>
                                                            <a href="#team"><BiLogoLinkedin></BiLogoLinkedin></a>
                                                            <a href="#team"><BiLogoYoutube></BiLogoYoutube></a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </OwlCarousel>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Teacher