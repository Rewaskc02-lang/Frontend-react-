import React from 'react'

function Product({ products }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      padding: '30px'
    }}>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '15px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >

          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: '100%',
              height: '180px',
              objectFit: 'contain'
            }}
          />

          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <p>
            Rating: ⭐ {product.rating}
          </p>

          <h3>${product.price}</h3>

          <button
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  )
}

export default Product