import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import './ProductDetail.css'

function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="container">
          <p>商品不存在</p>
          <Link to="/">返回首頁</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    alert(`已將 ${product.name} 加入購物車！`)
  }

  return (
    <div className="product-detail-container">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← 返回
        </button>
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-price">
              NT$ {product.price.toLocaleString()}
            </div>
            <button className="add-to-cart-btn-large" onClick={handleAddToCart}>
              加入購物車
            </button>
            <div className="product-features">
              <h3>商品特色</h3>
              <ul>
                <li>高品質保證</li>
                <li>快速配送</li>
                <li>7天退換貨服務</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

