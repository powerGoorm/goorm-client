import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PBL = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요한 페이지입니다.");
      navigate(`/login`);
    }
  }, [isLoggedIn, navigate]); // navigate를 의존성 배열에 추가

  return (
    <div>
      <h1>PBL</h1>
      <p>PBL 소개 화면입니다.</p>
    </div>
  );
};

export default PBL;
