import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from "./routes/home/Home";
import Auth from "./routes/auth/Auth";
import SignUp from "./routes/auth/SignUp";
import ResetPassword from "./routes/auth/ResetPassword";
import Board from "./routes/board/Board";
import Members from "./routes/member/Members";
import PBL from "./routes/pbl/PBL";

/* 멤버 개인 페이지 */

import Donggeun from "./routes/member/Donggeun";
import Jiho from "./routes/member/Jiho";
import Yerin from "./routes/member/Yerin";
import Mingyu from "./routes/member/Mingyu";
import Wooseok from "./routes/member/Wooseok";
import Jihwan from "./routes/member/Jihwan";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Home/Board" element={<Board />} />
        <Route path="/Home/Members" element={<Members />} />
        <Route path="/Home/PBL" element={<PBL />} />

        <Route path="/Home/Members/Donggeun" element={<Donggeun />} />
        <Route path="/Home/Members/Jiho" element={<Jiho />} />
        <Route path="/Home/Members/Yerin" element={<Yerin />} />
        <Route path="/Home/Members/Mingyu" element={<Mingyu />} />
        <Route path="/Home/Members/Wooseok" element={<Wooseok />} />
        <Route path="/Home/Members/Jihwan" element={<Jihwan />} />
      </Routes>
    </Router>
  );
}

export default App;
