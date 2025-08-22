export default function Header() {
    return (
      <header>
        <div className="logo">Exclusive</div>
  
        <nav className="mid-section">
          <a className="nav-item1" href="#">Home</a>
          <a className="nav-item2" href="#">Contact</a>
          <a className="nav-item3" href="#">About</a>
          <a className="nav-item4" href="#">Sign Up</a>
        </nav>
  
        <div className="search-cart">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <i className="fas fa-search"></i>
          </div>
  
          <i className="fas fa-heart icon"></i>
          <i className="fas fa-shopping-cart icon"></i>
          <i className="fas fa-user icon"></i>
        </div>
      </header>
    )
  }
  