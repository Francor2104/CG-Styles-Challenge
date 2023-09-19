import './footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">

        <div className='center-pay'>
            <div className='row'>
                <div className='row-payment'>
                    <div className='logos'>
                        <img className='pay-icons' src='/icons/visa.svg'/>
                        <img className='pay-icons' src='/icons/mastercard.svg'/>
                        <img className='pay-icons' src='/icons/amex.svg'/>
                        <img className='pay-icons' src='/icons/skrill.svg'/>
                        <img className='pay-icons'src='/icons/crypto.svg' alt="" />
                        <a className='more'> and 50+ more</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="list">
            <div className='row'>
                <div className='row-payment'>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/Chicksgroup/'><img className='icons' src='/icons/facebook.svg'/></a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/chicksgold/'><img className='icons' src='/icons/instagram.svg'/></a>
                    <a target='_blank' rel='noreferrer' href='https://twitter.com/chicksgold'><img className='icons' src='/icons/twitter.svg'/></a>
                    <a target='_blank' rel='noreferrer' href='https://discord.com/invite/chicksgold'><img className='icons' src='/icons/discord.svg'/></a>
                </div>
            </div>
            <hr className="hr"/>
            <div className="row">
                <div className="row-payment">
                <div className="footer-list">
                    <img className='img' src="chicks-logo.png"/>
                    <p className='support'>support@chicksgold.com</p>
                </div>
                <hr className='hr2'/>
                <div className="footer-list">
                    <select disabled className='dropdown-footer'>
                        <option selected value="Chicks Gold">Chicks Gold</option>
                    </select>
                <ul className='footer-category'>
                        <li className='title'>Chicks Gold</li>
                        <li className='footer-element'><a className='footer-text' href="#">Games</a></li>
                        <li className='footer-element'><a className='footer-text' href="#">About Us</a></li>
                        <li className='footer-element'><a className='footer-text' href="#">Blog</a></li>
                        <li className='footer-element'><a className='footer-text' href="#">Sitemap</a></li>
                </ul>
                </div>
                <hr className='hr2'/>

                <div className="footer-list">
                        <select disabled className='dropdown-footer'>
                            <option selected value="Support">Support</option>
                        </select>
                <ul className='footer-category'>
                        <li className='title'>Support</li>
                        <li className='footer-element'><a className='footer-text' href="#">Contact Us</a></li>
                        <li className='footer-element'><a className='footer-text' href="#">FAQ</a></li>
                    </ul>
                </div>
                <hr className='hr2'/>
                <div className="footer-list">
                <select disabled className='dropdown-footer'>
                    <option selected value="Legal">Legal</option>
                    </select>
                    <ul className='footer-category'>
                        <li className='title'>Legal</li>
                        <li className='footer-element'><a className='footer-text' href="#">Privacy Policy</a></li>
                        <li className='footer-element'><a className='footer-text' href="#">Terms of Service</a></li>
                        <li className='footer-element'><a className='footer-text' href="#">Copyright Policy</a></li>
                    </ul>
                </div>
                <hr className='hr2'/>
                <div className='footer-list review'>
                    <div className='review'>
                    <img className='stars' src='/icons/stars-5-1.png'/>
                    <p className='reviews'> Trustpilot Reviews  </p>

                    </div>
                </div>
                <div className="copyright">
                    <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved</p>
                </div>
            </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Footer
