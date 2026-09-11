const Saman = ({ title, price, image, addToCart }) => {
  return (
    <article className="items">
      <img src={image} alt={title} />
      <h2>Title: {title}</h2>
      <h3>Price: ₹{price}/-</h3>
      <button type="button" onClick={addToCart}>Add To Cart</button>
    </article>
  )
}

export default Saman