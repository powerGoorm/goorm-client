// App.js
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

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Home/Board" element={<Board postData={postData} setPostData={setPostData} />} />
        <Route path="/Home/Members" element={<Members />} />
        <Route path="/Home/PBL" element={<PBL />} />

        <Route path="/Home/Members/Donggeun" element={<Donggeun />} />
        <Route path="/Home/Members/Jiho" element={<Jiho />} />
        <Route path="/Home/Members/Yerin" element={<Yerin />} />
        <Route path="/Home/Members/Mingyu" element={<Mingyu />} />
        <Route path="/Home/Members/Wooseok" element={<Wooseok />} />
        <Route path="/Home/Members/Jihwan" element={<Jihwan />} />

        <Route path="/home/board/post/:id" element={<PostDetail postData={postData} />} />
      </Routes>
    </Router>
  );
}

export default App;
