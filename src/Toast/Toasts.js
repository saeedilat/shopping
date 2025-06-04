import React, { useContext, useRef, useState } from 'react'
import { Toast } from 'react-bootstrap'
import ProductsContext from '../Context/ProductsContext'
export default function Toasts() {
    const productsContext = useContext(ProductsContext)

    return (
        <div>
            {productsContext.isShowToast ? <Toast className='d-flex justify-content-between align-items-center px-2 position-fixed end-0 bottom-0 me-5 mb-5 bg-primary text-white'>

                <Toast.Body>Added succesfully</Toast.Body>
                <button className='btn-close btn-close-white' onClick={()=>productsContext.setIsShowToast(false)}></button>

            </Toast>:null}

        </div>
    )
}
