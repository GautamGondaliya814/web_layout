import { Container, Row } from "react-bootstrap"
import "D:/gautam/react/bootstarps5/node_modules/slick-carousel/slick/slick.css";
import "D:/gautam/react/bootstarps5/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LiaPaintBrushSolid, LiaBusinessTimeSolid } from "react-icons/lia";
import { LuMonitorDot } from "react-icons/lu";
import { PiChartLineUp } from "react-icons/pi";

const Categories = () => {
     const settings = {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          centerPadding: "60px",
          responsive:
               [     
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
     };
     return (
          <>
               <div className="categorie_area spacer">
                    <Container>
                         <div className="section-title title mx-auto text-center mb-5">
                              <h5 className="sub-title text-white">
                                   Our Categories
                                   <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                             <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                             <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                             <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                             <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                   </svg>
                              </h5>
                              <h2 className="text-white">Favorite Topics To Learn</h2>
                         </div>
                         <Row>
                              <div>
                                   <Slider {...settings}>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <LiaPaintBrushSolid></LiaPaintBrushSolid>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <LiaBusinessTimeSolid></LiaBusinessTimeSolid>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <LuMonitorDot></LuMonitorDot>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <PiChartLineUp></PiChartLineUp>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <LiaPaintBrushSolid></LiaPaintBrushSolid>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <LiaBusinessTimeSolid></LiaBusinessTimeSolid>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <LuMonitorDot></LuMonitorDot>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        <div>
                                             <div className="categorie_item me-1">
                                                  <div className="categorie_icon">
                                                       <PiChartLineUp></PiChartLineUp>
                                                  </div>
                                                  <h3 className="categorie_contant">
                                                       <a href="#index">Arts and Design</a>
                                                  </h3>
                                             </div>
                                        </div>
                                        

                                   </Slider>
                              </div>

                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Categories