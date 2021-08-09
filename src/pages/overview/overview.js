import React from 'react';
import Layout from '../../components/layout/layout';
import Polygon from '../../assets/octahedron.svg';
import Bluetooth from '../../assets/bluetooth.jpg';
import Headset from '../../assets/headset.jpg';
import Redmi from '../../assets/redmi.jpg';
import BarChart from '../Bar/bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartPlus, faPencilAlt, faSearch, faShoppingBag, faStar, faUsers, faChartPie } from '@fortawesome/free-solid-svg-icons';
import './overview.css';

const Overview = () => {
    return(
        <div>
            <Layout />
            <div className="overview">
                <div className="main">
                    <div className="input">
                        <FontAwesomeIcon icon={faSearch} className="search"/>
                        <input type="text" placeholder="Search for Product" />
                    </div>
                    <section className="section">
                        <h4>Overview</h4>
                        <div className="boxes">
                            <div className="box">
                                <div className="top">
                                    <FontAwesomeIcon icon={faShoppingBag} className="bag"/>
                                    <p>+24%</p>
                                </div>
                                <p><strong>$27,340.00</strong></p>
                                <p>Total Sales</p>
                            </div>
                            <div className="box">
                                <div className="top">
                                    <FontAwesomeIcon icon={faChartPie} className="pie"/>
                                    <p>-32%</p>
                                </div>
                                <p><strong>$27,340.00</strong></p>
                                <p>Total Expenses</p>
                            </div>
                            <div className="box">
                                <div className="top">
                                    <FontAwesomeIcon icon={faUsers} className="visitors"/>
                                    <p>+48%</p>
                                </div>
                                <p><strong>$18,260.00</strong></p>
                                <p>Total Visitors</p>
                            </div>
                            <div className="box">
                                <div className="top">
                                    <FontAwesomeIcon icon={faCartPlus} className="cart"/>
                                    <p>-12%</p>
                                </div>
                                <p><strong>$11,340.00</strong></p>
                                <p>Total Orders</p>
                            </div>
                        </div>
                    </section>
                    <section className="graph">
                        <div className="graph-top">
                            <div className="graph-top-left">
                                <p><strong>Income</strong></p>
                                <p>Expense</p>
                            </div>
                            <select>
                                <option>2020</option>
                            </select>
                        </div>
                        <BarChart />
                    </section>
                    <section className="products">
                        <h4>Popular Products</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Photos</th>
                                    <th>Name</th>
                                    <th>Data</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={Headset} alt="a headset" className="object"/></td>
                                    <td>Cowboy Hat</td>
                                    <td>Aug 12,2020</td>
                                    <td>Fashion</td>
                                    <td>Swallow</td>
                                    <td>$99.99</td>
                                    <td>Available</td>
                                </tr>
                                <tr>
                                    <td><img src={Redmi} alt="a redmi phone" className="object"/></td>
                                    <td>Smartphone</td>
                                    <td>Aug 12,2020</td>
                                    <td>Gadget</td>
                                    <td>Mite</td>
                                    <td>$99.99</td>
                                    <td>Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
                <hr className="hr" />
                <div className="aside">
                    <div className="aside-top">
                        <FontAwesomeIcon icon={faBell} className="bell" />
                        <FontAwesomeIcon icon={faPencilAlt} className="pencil"/>
                    </div>
                    <figure>
                        <img src={Polygon} alt="" className="konter"/>
                        <figcaption><strong>Konter Pulsa</strong></figcaption>
                    </figure>
                    <section className="count">
                        <div className="product">
                            <FontAwesomeIcon icon={faShoppingBag} className="shopping"/>
                            <div className="number">
                                <p>218</p>
                                <p>Products</p>
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="followers">
                            <FontAwesomeIcon icon={faUsers} className="users"/>
                            <div className="number">
                                <p>218</p>
                                <p>Products</p>
                            </div>
                        </div>
                    </section>
                    <section className="reputation">
                        <h5>Reputation</h5>
                        <div className="star">
                            <FontAwesomeIcon icon={faStar} className="aqua"/>
                        </div>
                    </section>
                    <section className="recent">
                        <div className="recent-top">
                            <h5>Recent Orders</h5>
                            <p><span className="blue">See All</span></p>
                        </div>
                        <div className="orders">
                            <div className="order">
                                <img src={Redmi} alt=""  className="object"/>
                                <div className="middle">
                                    <p><strong>Redmi 4x</strong></p>
                                    <p>2 minutes ago</p>
                                </div>
                                <p className="price"><span className="green">$80.00</span></p>
                            </div>
                            <div className="order">
                                <img src={Headset} alt="" className="object"/>
                                <div className="middle">
                                    <p><strong>Acer E1-241</strong></p>
                                    <p>2 minutes ago</p>
                                </div>
                                <p className="price"><span className="green">$300.00</span></p>
                            </div>
                            <div className="order">
                                <img src={Bluetooth} alt="a bluetooth speaker" className="object"/>
                                <div className="middle">
                                    <p><strong>Nikon D3500</strong></p>
                                    <p>2 minutes ago</p>
                                </div>
                                <p className="price"><span className="green">$80.00</span></p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Overview;