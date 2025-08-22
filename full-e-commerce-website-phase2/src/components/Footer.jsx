export default function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="first-col">
              <div className="first-col-first">Exclusive</div>
              <div className="first-col-second">Subscribe</div>
              <div className="first-col-third">Get 10% off your first order</div>
              <form>
                <input type="text" placeholder="Enter your email" />
                <button type="button">
                  <img src="/img/icon-send.svg" alt="send icon" />
                </button>
              </form>
            </div>
  
            <div className="second-col">
              <div className="second-col-first">Support</div>
              <div className="second-col-second">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </div>
              <div className="second-col-third">exclusive@gmail.com</div>
              <div className="second-col-forth">+88015-88888-9999</div>
            </div>
  
            <div className="third-col">
              <div className="third-col-first">Account</div>
              <div className="third-col-second">My Account</div>
              <div className="third-col-third">Cart</div>
              <div className="third-col-forth">Wishlist</div>
              <div className="third-col-fifth">Shop</div>
            </div>
  
            <div className="fourth-col">
              <div className="fourth-col-first">Quick Link</div>
              <div className="fourth-col-second">Privacy Policy</div>
              <div className="fourth-col-third">Terms Of Use</div>
              <div className="fourth-col-forth">FAQ</div>
              <div className="fourth-col-fifth">Contact</div>
            </div>
  
            <div className="fifth-col">
              <div className="fifth-col-first">Download App</div>
              <div className="fifth-col-second">
                Save $3 with App New User Only
              </div>
  
              <div className="section">
                <div className="fifth-col-third">
                  <img src="/img/Qr%20Code.svg" alt="QR code" />
                </div>
  
                <div className="fifth-col-forth">
                  <a href="#">
                    <img
                      src="/img/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg"
                      alt="Google Play"
                    />
                  </a>
                  <a href="#">
                    <img src="/img/download-appstore.svg" alt="App Store" />
                  </a>
                </div>
              </div>
  
              <div className="fifth-col-fifth">
                <a href="#">
                  <img src="/img/Icon-Facebook.svg" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="/img/Icon-Twitter.svg" alt="Twitter" />
                </a>
                <a href="#">
                  <img src="/img/icon-instagram.svg" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="/img/Icon-Linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </footer>
  
        <div className="footer-bottom">
          <p>&#169;Copyright Rimel 2022. All right reserved</p>
        </div>
      </>
    )
  }
  