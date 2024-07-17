import "./App.css";
import Login from "./pages/LoginPage/Login";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import StudentDashboard from "./pages/Student/StudentDashboard/StudentDashboard";
import Settings from "./pages/Student/Settings/Settings";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/settings" element={<Settings />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
