import React, { useContext } from 'react'
import "./Navbar.css"
import { BsBag } from "react-icons/bs";
import ProductsContext from '../../Context/ProductsContext';
export default function Navbar() {
    const productsContext = useContext(ProductsContext)
    return (
        <div>
            <nav className='navbar navbar-expand-sm py-3 d-flex '>
                <div className='container '>
                    <a className='navbar-brand' href='#'>
                        <img src='images/220005482.png' width="100" height="50" className='rounded'/>
                    </a>
                    <ul className='navbar-nav me-auto ms-3'>
                        <li className='nav-item'>
                            <a href='#' className='nav-link'>Home</a>
                        </li>
                    </ul>

                    <div className='bag-box'>
                        <a href='#' className='bag position-relative' onClick={()=>{productsContext.setIsShowCard(true)}}>
                            <BsBag className='bag-icon'/>
                            <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " >
                                {productsContext.cardProducts.length}
                                {/* <span class="visually-hidden">unread messages</span> */}
                            </span>
                        </a>

                    </div>
                </div>
            </nav>
        </div>
    )
}
