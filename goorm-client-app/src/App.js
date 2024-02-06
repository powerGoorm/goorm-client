import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './routes/Header';
import Home from "./routes/Home";
import Auth from "./routes/Auth";
import SignUp from "./routes/Sign_up";
import Resetpassword from "./routes/Reset_password";
import Board from "./routes/Board";
import Members from "./routes/Members";
import PBL from "./routes/PBL";

/* 멤버 개인 페이지 */

import Donggeun from "./routes/member/Donggeun";
import Jiho from "./routes/member/Jiho";
import Juwan from "./routes/member/Juwan";
import Yerin from "./routes/member/Yerin";
import Kiho from "./routes/member/Kiho";
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
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/Home/Board" element={<Board />} />
        <Route path="/Home/Members" element={<Members />} />
        <Route path="/Home/PBL" element={<PBL />} />
        <Route path="/Home/Members/Donggeun" element={<Donggeun />} />
        <Route path="/Home/Members/Jiho" element={<Jiho />} />
        <Route path="/Home/Members/Juwan" element={<Juwan />} />
        <Route path="/Home/Members/Yerin" element={<Yerin />} />
        <Route path="/Home/Members/Kiho" element={<Kiho />} />
        <Route path="/Home/Members/Mingyu" element={<Mingyu />} />
        <Route path="/Home/Members/Wooseok" element={<Wooseok />} />
        <Route path="/Home/Members/Jihwan" element={<Jihwan />} />
      </Routes>
    </Router>
  );
}

export default App;
