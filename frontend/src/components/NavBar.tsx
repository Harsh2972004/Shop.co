import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container navbar">
      <div>
        <h3 className="font-extrabold font-integral text-[32px] mb-1 pointer">
          <a href="/">SHOP.CO</a>
        </h3>
      </div>
      <ul className="centered gap-8 text-[16px]">
        <Link to="/shop">
          <li>
            Shop <KeyboardArrowDownIcon />
          </li>
        </Link>
        <Link to="/on-sale">
          <li>On Sale</li>
        </Link>
        <Link to="/new-arrivals">
          <li>New Arrivals</li>
        </Link>
        <Link to="/Brands">
          <li>Brands</li>
        </Link>
      </ul>
      <div className="relative">
        <input
          type="text"
          placeholder="search for products..."
          className="w-[577px] bg-[#f0f0f0] rounded-full h-[48px] px-12"
        />
        <SearchIcon
          style={{
            position: "absolute",
            left: "18px",
            top: "12px",
            fontSize: "26px",
            opacity: "30%",
          }}
        />
      </div>
      <div className="centered gap-4">
        <Link to="cart">
          <ShoppingCartIcon />
        </Link>
        <Link to="account">
          <AccountCircleIcon />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
