import {RegisterPage} from "./pages/register/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import {Dashboard} from "./pages/dashboard/Dashboard";
import "./App.css";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
