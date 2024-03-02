import { Container, Navbar, Nav, Offcanvas, NavbarText, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-0">
          <Container>
            <Navbar.Brand href="#">
              <img src={require('../img/logo.png')} alt="" width='100%'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-auto" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="w-50"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={require('../img/logo1.png')} alt="" width="100%"/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-5 d-flex main_menu">
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <NavDropdown title="Pages" id="basic-nav-dropdown" className="sub-menu">
                    <NavDropdown.Item><Link to="about">About</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="ourteachar">Our Teacher</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="teacher">Teacher Carousel</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="becometeachar">Become Teacher</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="teacherdetail">Teacher Details</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="gallery">Gallery</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="gallerycarousel">Gallery Carousel</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="faq">FAQs</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="login">Login</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="error">404 Error</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link><Link to="coursepage">Course</Link></Nav.Link>
                  <NavDropdown title="Shop" href="#action4" id="basic-nav-dropdown" className="sub-menu">
                    <NavDropdown.Item><Link to="product">Product</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="productcarousel">Product carousel</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="productdetail">Product Datails</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="cart">Cart</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="checkout">Checkout</Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link><Link to="blogpage">Blog</Link></Nav.Link>
                  <Nav.Link><Link to="contect">Contact</Link></Nav.Link>
                  <Navbar.Text>
                      <div className="nav-contact">
                        <ul>
                          <li>
                            <i class="fa-regular fa-envelope"></i>
                            <a href="#index">needhelp@company.com</a>
                          </li>
                          <li>
                            <i class="fa-solid fa-phone"></i>
                            <a href="#index">+92 (3680) - 9850</a>
                          </li>
                        </ul>
                      </div>
                      <div className="nav-social">
                        <a href="#index"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#index"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#index"><i class="fa-brands fa-pinterest-p"></i></a>
                        <a href="#index"><i class="fa-brands fa-instagram"></i></a>
                      </div>
                  </Navbar.Text>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <NavbarText>
              <div className="main d-flex">
                <div className="main-menu d-flex my-auto">
                  <a href="#home"><i class="fa-solid fa-magnifying-glass"></i></a>
                  <Link  to="login"><i class="fa-solid fa-user"></i></Link>
                </div>
                <div className="main-menu-info">
                  <i class="fa-solid fa-phone-volume"></i>
                  <span>
                    <p>(303) 555-0105</p>
                    <pre>Call to Questions</pre>
                  </span>
                </div>
              </div>
            </NavbarText>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default Header