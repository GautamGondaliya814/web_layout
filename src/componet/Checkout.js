import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
     const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
     );

     return (
          <button
               type="button"
               onClick={decoratedOnClick}
               style={{ padding: "10px", borderRadius: "50%", border: "none", backgroundColor: "#Fff" }}
          >
               {children}
          </button>
     );
}

const Checkout = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        CHECKOUT
                                   </h2>
                                   <ul className="page_list d-flex justify-content-center ps-0">
                                        <li>
                                             <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                             <span>Shop</span>
                                        </li>
                                   </ul>
                              </div>
                         </Container>
                    </div>
               </div>
               <div className="chechout spacer">
                    <Container>
                         <Row>
                              <Col xl={6} lg={6}>
                                   <h2 className='mb-5' style={{ color: "#2A254D" }}>Billing Details</h2>
                                   <form>
                                        <div className="content_form d-flex">
                                             <div className="become_team_input contect_input me-3">
                                                  <input type="text" placeholder='First Name' />
                                             </div>
                                             <div className="become_team_input contect_input">
                                                  <input type="text" placeholder='Last Name' />
                                             </div>
                                        </div>
                                        <div className="content_form d-flex">
                                             <div className="become_team_input contect_input me-3">
                                                  <input type="text" placeholder='Email Address' />
                                             </div>
                                             <div className="become_team_input contect_input">
                                                  <input type="text" placeholder='Phone Number' />
                                             </div>
                                        </div>
                                        <div className="become_team_input">
                                             <input type="text" placeholder='Company' />
                                        </div>
                                        <div className="become_team_input">
                                             <input type="text" placeholder='Address' />
                                        </div>
                                        <div className="become_team_input">
                                             <input type="text" placeholder='Apartment, Unit, etc(optional)' />
                                        </div>
                                        <div className="content_form d-flex">
                                             <div className="become_team_input contect_input me-3">
                                                  <input type="text" placeholder='Town/city' />
                                             </div>
                                             <div className="become_team_input contect_input">
                                                  <input type="text" placeholder='state' />
                                             </div>
                                        </div>
                                        <div className="content_form d-flex">
                                             <div className="become_team_input contect_input me-3">
                                                  <input type="text" placeholder='zip code' />
                                             </div>
                                             <div className="become_team_input contect_input">
                                                  <input type="text" placeholder='Country' checked />
                                             </div>
                                        </div>
                                   </form>
                                   <h2 className='my-4' style={{ color: "#2A254D" }}>Shipping Details</h2>
                                   <Row>
                                        <Col xl={12}>
                                             <input type="Checkbox" /><label>Same as Billing Details</label>
                                        </Col>
                                   </Row>
                              </Col>
                              <Col xl={6} lg={6}>
                                   <h2 className='mb-5' style={{ color: "#2A254D" }}>Additional Information</h2>
                                   <form>
                                        <div className="become_team_input">
                                             <textarea placeholder='Write a Message'></textarea>
                                        </div>
                                   </form>
                              </Col>
                         </Row>
                         <Row>
                              <h2 className='my-5' style={{ color: "#2A254D" }}>Your Order</h2>
                              <Col xl={6}>
                                   <div className="checkout_total_area">
                                        <ul className='checkout_total ps-0'>
                                             <li>
                                                  <span>Product</span>
                                                  <span>Price</span>
                                             </li>
                                             <li>
                                                  <span>Product Name</span>
                                                  <span>$10.99</span>
                                             </li>
                                             <li>
                                                  <span>SubTotal</span>
                                                  <span>$10.99</span>
                                             </li>
                                             <li>
                                                  <span>Shiping</span>
                                                  <span>$0.00</span>
                                             </li>
                                             <li>
                                                  <span>Total</span>
                                                  <span>$20.98</span>
                                             </li>
                                        </ul>
                                   </div>
                              </Col>
                              <Col>
                                   <Accordion defaultActiveKey="0">
                                        <Card>
                                             <Card.Header>
                                                  <CustomToggle eventKey="0"></CustomToggle><span>Direct bank transfer</span>
                                             </Card.Header>
                                             <Accordion.Collapse eventKey="0">
                                                  <Card.Body>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</Card.Body>
                                             </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                             <Card.Header>
                                                  <CustomToggle eventKey="1"></CustomToggle><span>Cash no delivery</span>
                                             </Card.Header>
                                             <Accordion.Collapse eventKey="1">
                                                  <Card.Body>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</Card.Body>
                                             </Accordion.Collapse>
                                        </Card>
                                   </Accordion>
                                   <div className="banner_btn me-4 ">
                                        <div className="btn btn3">
                                             <a href="#index">
                                                  <span className="eduact-btn"></span>
                                                  Plance your Order<i class="fa-solid fa-arrow-right-long"></i>
                                             </a>
                                        </div>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Checkout