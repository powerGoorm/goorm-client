import React from "react";
// import './Sign_up.css';

const SignUp = () => {

  const checkDuplicate = () => {
    console.log("중복확인 클릭");
  };
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>회원가입</h2>
        <form>
          <div className="input-with-button">
            <label htmlFor="email">아이디</label>
            <input type="email" placeholder="아이디" name="email" />
            <button type="button" onClick={checkDuplicate}>중복확인</button>
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" placeholder="비밀번호" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="password-check">비밀번호 확인</label>
            <input type="password" placeholder="비밀번호 확인" name="password-check" />
          </div>
          <input type="submit" value="회원 가입" />
        </form>
      </div>
    </div>
  )
}

export default SignUp;