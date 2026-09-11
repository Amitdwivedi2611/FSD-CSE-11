import { useState } from 'react'
import Userlayout from './Pages/Userlayout'
import "./App.css"

const products = [
  { id: 1, title: 'ReactJS', price: 465, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=85' },
  { id: 2, title: 'NodeJS', price: 565, image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=85' },
  { id: 3, title: 'ExpressJS', price: 763, image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=85' },
  { id: 4, title: 'ReactJS', price: 465, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=85' },
]

const App = () => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <Userlayout
      products={products}
      cartCount={cartCount}
      addToCart={() => setCartCount((count) => count + 1)}
    />
  )
}

export default App