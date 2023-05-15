// Footer
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-content__container">
                    <div className="footer-content">
                        <h1 className="footer-logo">The Online Shop</h1>
                        <p className="footer-description">
                            The Online Shop is your online shopping companion, designed to make your shopping experience delightful and convenient. Start exploring our extensive collection of products today and enjoy the world of possibilities we offer. Happy shopping!
                        </p>
                        <p className='copyright'>© 2023 The Online Shop. All rights reserved.</p>
                    </div>
                    <div className="footer-content">
                        <ul className="footer-list">
                            <li className="footer-item">About Us</li>
                            <li className="footer-item">Our Products</li>
                            <li className="footer-item">Privacy Policy</li>
                            <li className="footer-item">Career</li>
                            <li className="footer-item">Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <h3 className="newsletter-heading">
                            Join our Newsletter
                        </h3>
                        <div className="newsletter">
                            <input type="text" placeholder='Your Email'/>
                            <input type="button" value="Subscribe" />
                        </div>
                    </div>
                </div>
            </div> 
        </footer>
    )
}

export default Footer