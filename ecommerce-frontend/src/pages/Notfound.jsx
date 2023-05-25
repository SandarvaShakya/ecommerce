import '../styles/Notfound.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Notfound = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="not-found-img">
          <img loading='lazy' src="/images/not-found.png" alt="a man searching for the page" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Notfound