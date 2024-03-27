import React, { useState } from "react";
import './Header.css';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const Header = ({isLoggedIn, setIsLoggedIn }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('sessionToken');
    alert('로그아웃 되었습니다.');
    navigate('/');
  }

  return (
    <div className="header-icons">
      {/* Link 컴포넌트를 사용하여 홈으로 이동하는 아이콘/버튼 */}
      <Link to="/" className="banner-icon">
        <span className="material-icons">cloud_queue</span> {/* 예시로 material-icons 사용 */}
      </Link>

      {/* 로그인 상태에 따라 다른 내용을 보여줌 */}
      {isLoggedIn ? (
        // 로그아웃 버튼으로 변경
        <Button variant="outline-primary" onClick={handleLogout}>로그아웃</Button>
      ) : (
        // 로그인 버튼
        <Link to="/login" className="login_btn">
          <Button variant="outline-primary">로그인</Button> {/* react-bootstrap의 Button 사용 */}
        </Link>
      )}
    </div>
  );
}

export default Header;
