import React from "react";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Auth = () => {

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []); // useEffect는 로그인 화면에서 스크롤을 방지하기 위함.

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>로그인</h2>
        <form>
          <div className="input-group">
            <label>아이디</label>
            <input type="email" placeholder="아이디" name="email" />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호" name="password" />
          </div>
          <div className="input-group">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">아이디 저장</label>
          </div>
          <input type="submit" value="로그인" />
        </form>
        <div className="auth-links">
          <Link to="/signup">회원가입</Link>
          <Link to="/Resetpassword">비밀번호 재설정</Link>
        </div>
      </div>
    </div>
  )
}

export default Auth;