import React, { useEffect, useState, useContext } from 'react'
import "./Products.css"
import ProductsContext from '../Context/ProductsContext'
export default function Products() {

    let products = useContext(ProductsContext)

    // console.log(products);

    const showToast = (productId) => {
        products.setIsShowToast(true)

        setTimeout(() => {
            products.setIsShowToast(false)
        }, 2000)
        // console.log(productId);
      


        const cardProducts = products.products.filter(product => (product.id === productId))
        // console.log(cardProducts);

        products.setCardProducts(prev => [...prev, cardProducts[0]]
        )



    }



    return (

        <div className='row '>
            <h2 className='text-center my-5'>Laptop</h2>
            {products.products.filter(product => (product.category === 'laptop')).map(product => (
                <div className='col-xl-3 col-md-6 col-sm-12' key={product.id}>
                    <div className='card mb-3'>
                        <div className='text-center'>
                            <img src={`${product.img}`} className='card-img-top w-75 ' />
                        </div>
                        <div className='card-body text-center px-5'>
                            <h5 className="card-title">{product.title}</h5>
                            <p className='text-card'> {product.price}</p>
                            <a className="btn btn-danger mb-3" onClick={() => { showToast(product.id) }}>Add To Cart</a>
                            <a href="#" className="btn mb-3 btn-outline-dark">More Information </a>
                            <p className='count'>Number: {product.count}</p>
                        </div>

                    </div>
                </div>
            ))}
            <h2 className='text-center my-5'>mobile</h2>

            {products.products.filter(product => (product.category === 'mobile')).map(product => (
                <div className='col-xl-3 col-md-6 col-sm-12' key={product.id}>
                    <div className='card mb-3 '>
                        <div className='text-center'>
                            <img src={`${product.img}`} className='card-img-top w-75 ' />
                        </div>
                        <div className='card-body text-center px-5'>
                            <h5 className="card-title">{product.title}</h5>
                            <p className='text-card'> {product.price}</p>
                            <a className="btn btn-danger mb-3" onClick={() => { showToast(product.id) }} >Add To Cart</a>
                            <a href="#" className="btn mb-3 btn-outline-dark">More Information </a>
                            <p className='count'>Number: {product.count}</p>
                        </div>

                    </div>
                </div>
            ))}


        </div>
    )
}
