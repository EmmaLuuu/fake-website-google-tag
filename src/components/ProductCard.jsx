import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product, addToCart }) {
  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    alert(`已將 ${product.name} 加入購物車！`)
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <span className="product-price">NT$ {product.price.toLocaleString()}</span>
          </div>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        加入購物車
      </button>
    </div>
  )
}

export default ProductCard

