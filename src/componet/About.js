import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Aboutus from "./Aboutus"
import Conuter from "./Conuter"
import Course from "./Course"
import Testimonial from "./Testimonial"
import Team from "./Team"
import Cta from "./Cta"

const About = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        About
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>About</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <Aboutus />
               <Conuter />
               <Course />
               <Testimonial />
               <Team />
               <Cta />
          </>
     )
}
export default About