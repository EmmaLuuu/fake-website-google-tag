import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container">
            <Link to="/" className="logo">
              <h1>🛍️ 購物網站</h1>
            </Link>
            <nav>
              <Link to="/" className="nav-link">首頁</Link>
              <Link to="/cart" className="nav-link cart-link">
                購物車
                {getCartItemCount() > 0 && (
                  <span className="cart-badge">{getCartItemCount()}</span>
                )}
              </Link>
            </nav>
          </div>
        </header>

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<ProductList addToCart={addToCart} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  cart={cart}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 購物網站. 版權所有.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

