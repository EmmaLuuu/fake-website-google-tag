import { Link } from 'react-router-dom'
import './ShoppingCart.css'

function ShoppingCart({ cart, updateCartQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div className="shopping-cart-container">
        <div className="container">
          <h2 className="page-title">購物車</h2>
          <div className="empty-cart">
            <p>您的購物車是空的</p>
            <Link to="/" className="continue-shopping-btn">
              繼續購物
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="shopping-cart-container">
      <div className="container">
        <h2 className="page-title">購物車</h2>
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">
                    NT$ {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateCartQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    NT$ {(item.price * item.quantity).toLocaleString()}
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    移除
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>訂單摘要</h3>
            <div className="summary-row">
              <span>小計</span>
              <span>NT$ {total.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>運費</span>
              <span>NT$ 100</span>
            </div>
            <div className="summary-row total">
              <span>總計</span>
              <span>NT$ {(total + 100).toLocaleString()}</span>
            </div>
            <button className="checkout-btn">前往結帳</button>
            <Link to="/" className="continue-shopping-link">
              繼續購物
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart

