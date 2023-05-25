import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className='container'>
        <div className="hero-content">
          <div className="hero-about">
            <h1>We bring good things to life</h1>
            <p>
              Step into a world of limitless possibilities and discover a remarkable collection of products that will delight your senses and elevate your everyday experiences.
            </p>
          </div>
          <div className="hero-item">
            <div className="hero-item--content">
              <h2>Varsity Jacket Camel</h2>
              <p>
                Introducing our Varsity Jacket in Camel. This timeless classic combines the sophistication of camel with the sporty charm of a varsity jacket. Crafted with meticulous attention to detail, it features premium materials for maximum comfort and durability.
              </p>
            </div>
            <div className="features-container">
              <div className="sizes">
                <h4>Sizes</h4>
                <ul className="size-list">
                  <li className="size-item">XXL</li>
                  <li className="size-item">XL</li>
                  <li className="size-item selected-size">L</li>
                  <li className="size-item">M</li>
                  <li className="size-item">S</li>
                </ul>
              </div>
              <div className="colors">
                <h4>Colors</h4>
                <ul className="color-list">
                  <li className="color-item selected-color"></li>
                  <li className="color-item"></li>
                  <li className="color-item"></li>
                  <li>
                    <button className="hero-add-to-cart-m">
                      <img src="/icons/bag.svg" alt="add-to-cart" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <button className="hero-add-to-cart-d">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero