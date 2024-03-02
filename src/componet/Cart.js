import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import CloseButton from 'react-bootstrap/CloseButton';
const Cart = () => {
     return (
          <>
               <div className="banner_area">
                    <div className="banner_bg1">
                         <Container className="text-center">
                              <div className="page">
                                   <h2 className="page-title">
                                        CART
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
               <div className="cart_page spacer">
                    <Container>
                         <table width="100%" className='mb-5'>
                              <tr>
                                   <th>Items</th>
                                   <th>Price</th>
                                   <th>Quantity</th>
                                   <th>Total</th>
                                   <th>Remove</th>
                              </tr>
                              <tr>
                                   <td>
                                        <img src={require('../img/product-8.jpg')} alt="" />
                                        <span className='h5'>Office Chair</span>
                                   </td>
                                   <td><h5>$10.99</h5></td>
                                   <td>
                                        <div class="quantity-box d-inline-flex align-items-center">
                                             <button type="button"><i class="fa fa-minus"></i></button>
                                             <input type="number" placeholder='1' />
                                             <button type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                   </td>
                                   <td><h5>$10.99</h5></td>
                                   <td><CloseButton /></td>
                              </tr>
                              <tr>
                                   <td>
                                        <img src={require('../img/product-6.jpg')} alt="" />
                                        <span className='h5'>Office Chair</span>
                                   </td>
                                   <td><h5>$10.99</h5></td>
                                   <td>
                                        <div class="quantity-box d-inline-flex align-items-center">
                                             <button type="button"><i class="fa fa-minus"></i></button>
                                             <input type="number" placeholder='1' />
                                             <button type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                   </td>
                                   <td><h5>$10.99</h5></td>
                                   <td><CloseButton /></td>
                              </tr>
                         </table>
                         <Row>
                              <Col xl={8} lg={7}>
                                   <form className='cart_page_form d-flex flex-wrap'>
                                        <input type="text" placeholder='Enter coupon code' />
                                        <div className="banner_btn me-4 mt-3">
                                             <div className="btn btn3">
                                                  <a href="#index">
                                                       <span className="eduact-btn"></span>
                                                       Apply Coupon<i class="fa-solid fa-arrow-right-long"></i>
                                                  </a>
                                             </div>
                                        </div>
                                   </form>
                              </Col>
                              <Col xl={4} lg={5}>
                                   <ul className='cart_page_total'>
                                        <li>
                                             <span>SubTotal</span>
                                             <span>$20.33</span>
                                        </li>
                                        <li>
                                             <span>Shiping</span>
                                             <span>$0.00</span>
                                        </li>
                                        <li>
                                             <span>Total</span>
                                             <span>$20.33</span>
                                        </li>
                                   </ul>
                                   <div className="product_detail_btn d-flex flex-wrap justify-content-end">
                                             <div className="banner_btn me-4">
                                                  <div className="btn btn3">
                                                       <a href="#index">
                                                            <span className="eduact-btn"></span>
                                                            Update<i class="fa-solid fa-arrow-right-long"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="banner_btn">
                                                  <div className="btn">
                                                       <a href="#index">
                                                            <span className="eduact-btn"></span>
                                                            Checkout<i class="fa-solid fa-arrow-right-long"></i>
                                                       </a>
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
export default Cart