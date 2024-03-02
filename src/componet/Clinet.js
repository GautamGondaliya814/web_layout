import { Col, Container, Row } from "react-bootstrap"
import OwlCarousel from 'react-owl-carousel';

const Clinet = () => {
     const settings = {
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          nav:false,
          items: 5,
          responsive: {
               425: {
                    items: 1
               },
               768: {
                    items: 3
               },
               1024: {
                    items: 4
               },
               1440: {
                    items: 5
               }
          }
     }
     return (
          <>
               <div className="clinet_area py-5">
                    <Container>
                         <Row>
                              <Col>
                                   <OwlCarousel className='owl-theme' {...settings}>
                                        <div class='item'>
                                             <div className="clinet_img">
                                                  <img src={require('../img/clinet.png')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="clinet_img">
                                                  <img src={require('../img/clinet.png')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="clinet_img">
                                                  <img src={require('../img/clinet.png')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="clinet_img">
                                                  <img src={require('../img/clinet.png')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="clinet_img">
                                                  <img src={require('../img/clinet.png')} alt="" />
                                             </div>
                                        </div>
                                        <div class='item'>
                                             <div className="clinet_img">
                                                  <img src={require('../img/clinet.png')} alt="" />
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
export default Clinet