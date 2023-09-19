import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
  
  return (
    <>
    <header>

      <div className="navbar">
        <div className="brand">
          <a className="menu-toggle">
          <MenuIcon className="icon"/>
          </a>
          <img className="logo" src="/chicks-logo.png" alt="logo" />
        </div>
        <div className="divider"></div>

        <div className="navbar-menu">
          <div className="dropdown-header">
            <span>CURRENCY</span>
            <KeyboardArrowDownIcon className="dropdown-arrow"/>
          </div>
          <div className="dropdown-header">
            <span>ITEMS</span>
            <KeyboardArrowDownIcon className="dropdown-arrow"/>
          </div>
          <div className="dropdown-header">
            <span>ACCOUNTS</span>
            <KeyboardArrowDownIcon className="dropdown-arrow"/>
          </div>
          <div className="dropdown-header">
            <span>SERVICES</span>
            <KeyboardArrowDownIcon className="dropdown-arrow"/>
          </div>
          <div className="dropdown-header">
            <span>MORE</span>
            <KeyboardArrowDownIcon className="dropdown-arrow"/>
          </div>
          <div className="dropdown-header">
            <span>SELL</span>
            <KeyboardArrowDownIcon className="dropdown-arrow"/>
          </div>
        </div>

        <div className="navbar-end">
          <div className="dropdown-header end">
            <span>USD</span>
            <KeyboardArrowDownIcon className="dropdown-arrow"/>
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
