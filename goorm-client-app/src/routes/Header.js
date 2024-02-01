import React, {useState} from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header-icons">
      <Link to="/" className="banner-icon">
        <span className="material-icons">cloud_queue</span>
      </Link>
      <Link to="/" className="user-icon">
      {
        isLoggedIn
          ? <span className="material-icons">person</span>
          : <button className="login_btn">로그인</button>
      }
      </Link>
    </div>
  )
}

export default Header;