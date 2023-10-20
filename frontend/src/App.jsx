import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyAccount from "./components/MyAccount";
import MyProcedures from "./components/MyProcedures";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/MyAccount" element={<MyAccount />} />
      <Route path="/MyProcedures" element={<MyProcedures />} />
    </Routes>
  );
}

export default App;
