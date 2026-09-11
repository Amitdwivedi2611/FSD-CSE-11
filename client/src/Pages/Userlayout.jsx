import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'

const Userlayout = (props) => {
  return (
    <div className="app-shell">
        <Header />
        <Navbar cartCount={props.cartCount} />
        <Home {...props} />
        <Footer />
    </div>
  )
}

export default Userlayout