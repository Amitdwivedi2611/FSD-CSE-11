import Saman from './Saman'

const Home = ({ products, addToCart }) => {
  return (
    <main className="home" id="products">
      <div className="product-grid">
        {products.map((item) => <Saman key={item.id} {...item} addToCart={addToCart} />)}
      </div>
    </main>
  )
}

export default Home