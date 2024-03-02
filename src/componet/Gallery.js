import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
const Gallery = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        gallery
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>Gallery</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="gallery_page spacer">
                    <Container>
                         <Row>
                              <Col lg={4} md={6}>
                                   <div className="gallery_single">
                                        <img src={require('../img/gallery-1.jpg')} alt="" />
                                   </div>
                              </Col>
                              <Col lg={4} md={6}>
                                   <div className="gallery_single">
                                        <img src={require('../img/gallery-2.jpg')} alt="" />
                                   </div>
                              </Col>
                              <Col lg={4} md={6}>
                                   <div className="gallery_single">
                                        <img src={require('../img/gallery-3.jpg')} alt="" />
                                   </div>
                              </Col>
                         </Row>
                         <Row>
                              <Col lg={4} md={6}>
                                   <div className="gallery_single">
                                        <img src={require('../img/gallery-4.jpg')} alt="" />
                                   </div>
                              </Col>
                              <Col lg={4} md={6}>
                                   <div className="gallery_single">
                                        <img src={require('../img/gallery-5.jpg')} alt="" />
                                   </div>
                              </Col>
                              <Col lg={4} md={6}>
                                   <div className="gallery_single">
                                        <img src={require('../img/gallery-6.jpg')} alt="" />
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Gallery