import "./App.css";
import Login from "./pages/LoginPage/Login";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
