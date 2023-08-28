import { RegisterPage } from "./pages/register/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { LoginPage } from "./pages/login/LoginPage";
import { NewAccountVerification } from "./pages/verify/NewAccountVerification";
import "./App.css";
import ResetPassword from "./pages/reset-password/ResetPassword";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="verify" element={<NewAccountVerification />} />
          <Route path="reset-password" element={<ResetPassword />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
