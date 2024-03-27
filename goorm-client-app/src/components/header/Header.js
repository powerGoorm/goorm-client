import {React, useState} from "react";
import './Header.css';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header-icons">
    {/* Link 컴포넌트를 사용하여 홈으로 이동하는 아이콘/버튼 */}
    <Link to="/" className="banner-icon">
      <span className="material-icons">cloud_queue</span> {/* 예시로 material-icons 사용 */}
    </Link>

    {/* 로그인 상태에 따라 다른 내용을 보여줌 */}
    {isLoggedIn ? (
      <Link to="/" className="user-icon">
        <span className="material-icons">person</span> {/* 예시로 material-icons 사용 */}
      </Link>
    ) : (
      <Link to="/login" className="login_btn">
        <Button variant="outline-primary">로그인</Button> {/* react-bootstrap의 Button 사용 */}
      </Link>
    )}
  </div>
  )
}

export default Header;