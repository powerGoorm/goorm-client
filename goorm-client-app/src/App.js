import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./routes/Home";
import Auth from "./routes/Auth";
import Board from "./routes/Board";
import Members from "./routes/Members";
import PBL from "./routes/PBL";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/PBL" element={<PBL />} />
      </Routes>
    </Router>
  );
}

export default App;
