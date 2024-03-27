import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Jiho = ({isLoggedIn}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 페이지입니다.");
      navigate(`/login`);
    }
  }, [isLoggedIn, navigate]); // navigate를 의존성 배열에 추가
  
  return (
    <div>
      <h1> 지호 </h1>
      <p> 지호 님의 개인 페이지입니다. </p>
    </div>
  )
}

export default Jiho;