import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navber/Navbar'
import "./App.css"
import Products from './Products/Products'
import ProductsContext from './Context/ProductsContext'
import Toasts from './Toast/Toasts'
import Card from './Components/Card/Card'
export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://bvfobanpvywwlawfyogn.supabase.co/rest/v1/Products', {
      method: 'GET',
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Zm9iYW5wdnl3d2xhd2Z5b2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MjE5NDEsImV4cCI6MjA2NDA5Nzk0MX0.C18fsMnK66W2pDGURt0tfRt2s5jLFfg9qYByzNTDHjQ',

        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Zm9iYW5wdnl3d2xhd2Z5b2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MjE5NDEsImV4cCI6MjA2NDA5Nzk0MX0.C18fsMnK66W2pDGURt0tfRt2s5jLFfg9qYByzNTDHjQ'
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data))

      .catch(err => console.log(err)
      )



  }, [])

  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCard,setIsShowCard]=useState(false)

  const [cardProducts, setCardProducts] = useState([])

  console.log(cardProducts);
  
  return (
    <ProductsContext.Provider value={{
      products,
      isShowToast, setIsShowToast,
      cardProducts, setCardProducts,
      isShowCard,setIsShowCard
    }} >

      <div >
        <Navbar />
        <main className='mt-5'>
          <div className=' container '>
            <h1 className='text-center d-block main-title'>All Productes</h1>

            <Products />

          </div>
        </main>
        <Toasts />
        <Card img={products[1] ? products[0].img : null} />
      </div>
    </ProductsContext.Provider>

  )
}

