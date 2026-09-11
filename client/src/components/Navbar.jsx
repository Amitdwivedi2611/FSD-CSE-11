const Navbar = ({ cartCount }) => {
  return (
    <nav className="Navbar">
      <a className="active" href="#products">Home</a>
      <button type="button" onClick={() => alert(`You have ${cartCount} item${cartCount === 1 ? '' : 's'} in your cart.`)}>My Cart ({cartCount})</button>
      <a href="#orders">My Order</a>
      <a href="#settings">Settings</a>
      <a href="#profile">My Profile</a>
      <a href="#logout">Logout</a>
    </nav>
  )
}

export default Navbar