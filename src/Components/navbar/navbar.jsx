import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  
  return (
    <>
    <header>

      <div className="navbar">
          <a className="menu-toggle">
          <MenuIcon className="icon"/>
          </a>
        <div className="brand">
          <img className="logo" src="/chicks-logo.png" alt="logo" />
        </div>
        <div className="divider"></div>

        <div className="navbar-menu">
          <div className="dropdown-header">
            <span>CURRENCY</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="dropdown-header">
            <span>ITEMS</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="dropdown-header">
            <span>ACCOUNTS</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="dropdown-header">
            <span>SERVICES</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="dropdown-header">
            <span>MORE</span>
            <span className="dropdown-arrow"></span>
          </div>
          <div className="dropdown-header">
            <span>SELL</span>
            <span className="dropdown-arrow"></span>
          </div>
        </div>

        <div className="navbar-end">
          <div className="dropdown-header end">
            <span>USD</span>
            <span className="dropdown-arrow"></span>
          </div>

          <div className="dropdown-header end">
            <ShoppingCartIcon className="cart"/>
            <span>Cart (5)</span>
          </div>

          <div className="sign">
            <button href="#" className="user2">
              <span className="button-text"> SIGN IN</span><img className="user-icon" src="/profile.png" alt=""/>
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Navbar;
