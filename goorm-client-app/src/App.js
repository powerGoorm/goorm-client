import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./routes/home/Home";
import Login from "./routes/auth/Login";
import SignUp from "./routes/auth/SignUp";
import ResetPassword from "./routes/auth/ResetPassword";
import Board from "./routes/board/Board";
import Members from "./routes/member/Members";
import PBL from "./routes/pbl/PBL";
import PostDetail from "./routes/board/PostDetail";
import NotFound from "./routes/errorpage/NotFound"; // 404 오류 페이지 컴포넌트 추가

/* 멤버 개인 페이지 */
import Donggeun from "./routes/member/Donggeun";
import Jiho from "./routes/member/Jiho";
import Yerin from "./routes/member/Yerin";
import Mingyu from "./routes/member/Mingyu";
import Wooseok from "./routes/member/Wooseok";
import Jihwan from "./routes/member/Jihwan";

function App() {
  const [postData, setPostData] = useState(
    localStorage.getItem("postData")
      ? JSON.parse(localStorage.getItem("postData"))
      : []
  );

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const sessionToken = sessionStorage.getItem('sessionToken');
    return !!sessionToken;
  });


  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/Board"
          element={<Board postData={postData} setPostData={setPostData} />}
        />
        <Route path="/Members" element={<Members isLoggedIn={isLoggedIn} />} />
        <Route path="/PBL" element={<PBL isLoggedIn={isLoggedIn} />} />
        <Route path="/Members/Donggeun" element={<Donggeun isLoggedIn={isLoggedIn} />} />
        <Route path="/Members/Jiho" element={<Jiho isLoggedIn={isLoggedIn} />} />
        <Route path="/Members/Yerin" element={<Yerin isLoggedIn={isLoggedIn} />} />
        <Route path="/Members/Mingyu" element={<Mingyu isLoggedIn={isLoggedIn} />} />
        <Route path="/Members/Wooseok" element={<Wooseok isLoggedIn={isLoggedIn} />} />
        <Route path="/Members/Jihwan" element={<Jihwan isLoggedIn={isLoggedIn} />} />
        <Route path="/board/post/:id" element={<PostDetail isLoggedIn={isLoggedIn} />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
