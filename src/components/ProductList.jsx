import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { products } from '../data/products'
import './ProductList.css'

function ProductList({ addToCart }) {
  return (
    <div className="product-list-container">
      <div className="container">
        <h2 className="page-title">商品列表</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList

