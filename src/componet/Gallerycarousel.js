import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel';
const Gallerycarousel = () => {
     const settings = {
          margin: 30,
          autoplay: true,
          smartSpeed: 700,
          loop: true,
          responsive: {
               425: {
                    items: 1,
                    margin: 0
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
               <div className="gallery spacer">
                    <Container>
                         <Row>
                              <Col>
                                   <OwlCarousel className='owl-theme' {...settings}>
                                        <div class='item'>
                                             <div className="gallery_single">
                                                  <img src={require('../img/gallery-1.jpg')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="gallery_single">
                                                  <img src={require('../img/gallery-2.jpg')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="gallery_single">
                                                  <img src={require('../img/gallery-3.jpg')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="gallery_single">
                                                  <img src={require('../img/gallery-4.jpg')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="gallery_single">
                                                  <img src={require('../img/gallery-5.jpg')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="gallery_single">
                                                  <img src={require('../img/gallery-6.jpg')} alt="" />
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
export default Gallerycarousel