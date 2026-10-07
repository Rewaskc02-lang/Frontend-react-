import React, { useEffect, useState } from 'react'
import Product from './Product'

function App() {
  const [products, setProduct] = useState([])

  useEffect(() => {
    async function APIcall() {
      
      let response = await fetch("http://localhost:3000/products")
      let data = await response.json()

      console.log(data)

      setProduct(data)
    }

    APIcall()
  }, [])

  return (
    <div>
      <Product products={products} />
    </div>
  )
}

export default App