import React from 'react';
import Layout from '../../components/layout/layout';
import Sidebar from '../../components/sidebar/sidebar';
import './overview.css';

const Overview = () => {
    return(
        <div>
            <Sidebar />
            <div className="main">
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder="Search for Product" />
                </div>
                <section className="section">
                    <h3>Overview</h3>
                    <div className="box">
                        <div className="top">
                            <img src="" alt="" />
                            <p>+24%</p>
                        </div>
                        <p><strong>$27,340.00</strong></p>
                        <p>Total Sales</p>
                    </div>
                    <div className="box">
                        <div className="top">
                            <img src="" alt="" />
                            <p>-32%</p>
                        </div>
                        <p><strong>$27,340.00</strong></p>
                        <p>Total Expenses</p>
                    </div>
                    <div className="box">
                        <div className="top">
                            <img src="" alt="" />
                            <p>+48%</p>
                        </div>
                        <p><strong>$18,260.00</strong></p>
                        <p>Total Visitors</p>
                    </div>
                    <div className="box">
                        <div className="top">
                            <img src="" alt="" />
                            <p>-12%</p>
                        </div>
                        <p><strong>$11,340.00</strong></p>
                        <p>Total Orders</p>
                    </div>
           </section>
           <section className="graph"></section>
           <section className="products">
               <h3>Popular Products</h3>
               <table>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                 </tbody>
               </table>
            </section>
            </div>
            <div className="aside">
                <div className="aside-top">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <img src="" alt="" />
                <section className="count">
                    <div className="products">
                        <img src="" alt=""/>
                        <div className="number">
                            <p>218</p>
                            <p>Products</p>
                        </div>
                    </div>
                    <div className="followers">
                        <img src="" alt=""/>
                        <div className="number">
                            <p>218</p>
                            <p>Products</p>
                        </div>
                    </div>
                </section>
                <section className="reputation">
                    <h3>Reputation</h3>
                    <div className="star">
                        <img src="" alt="" />
                    </div>
                </section>
                <section className="recent">
                    <div className="recent-top">
                        <h3>Recent Orders</h3>
                        <p>See All</p>
                    </div>
                    <div className="orders">
                        <div className="order">
                            <img src="" alt="" />
                            <div className="middle">
                                <p><strong>Redmi 4x</strong></p>
                                <p>2 minutes ago</p>
                            </div>
                            <p className="price">$80.00</p>
                        </div>
                        <div className="order">
                            <img src="" alt="" />
                            <div className="middle">
                                <p><strong>Acer E1-241</strong></p>
                                <p>2 minutes ago</p>
                            </div>
                            <p className="price">$300.00</p>
                        </div>
                        <div className="order">
                            <img src="" alt="" />
                            <div className="middle">
                                <p><strong>Nikon D3500</strong></p>
                                <p>2 minutes ago</p>
                            </div>
                            <p className="price">$80.00</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Overview;