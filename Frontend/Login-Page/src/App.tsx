import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./components/SignUpPage/SignUpPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
