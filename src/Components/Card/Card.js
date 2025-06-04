import React, { useEffect } from 'react'
import './CArd.css'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import ProductsContext from '../../Context/ProductsContext'
import { useContext } from 'react'
export default function Card() {

    // console.log(img);

    const productContext = useContext(ProductsContext)

    const unique = new Set(productContext.cardProducts)

    const uniquepro = [...unique]
    console.log(uniquepro);

    return (


        <aside className={`bag-sidebar ${productContext.isShowCard ? 'active' : ''}`}> {/*add active class to show bag sidber*/}
            <div>
                <h3 className='bag-title d-flex justify-content-between align-items-center'>
                    <span className='d-flex align-items-center gap-2'>
                        <BsBag />
                        Bag
                    </span>
                    <span >
                        <AiOutlineClose className='close' onClick={() => { productContext.setIsShowCard(false) }} />
                    </span>
                </h3>
                {uniquepro.map(product => (


                    < div className='row bag-wrapper' >
                        <div className='col-12 mt-5'>
                            <div className='card py-3 px-3'>
                                <div className='col-12 text-center'>
                                    <img className='card-img-top w-75' src={`${product.img}`} />
                                </div>
                                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <p className='card-text'>{product.title}</p>
                                    <p className='price text-card px-2'>{product.price}</p>

                                    <a href='#' className='btn btn-danger'>Buy</a>
                                    <a href='#' className='btn btn-outline-dark mt-3 '>More Information</a>
                                    <p className='number mt-3 px-2 py-1'>{productContext.cardProducts.filter(pro => pro.id === product.id).length}</p>
                                </div>

                            </div>
                        </div>
                    </div>

                ))}

            </div>




        </aside >
    )
}
