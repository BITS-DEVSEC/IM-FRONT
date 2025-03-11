import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login"; // Adjust path
import Otp from "./pages/auth/otp"; // Adjust path
import Register from "./pages/auth/register"; // Adjust path
import ConfirmPassword from "./pages/auth/confirm-password"; // Adjust path
import Done from "./pages/auth/done"; // Adjust path
import AdminDashboard from "./pages/admin/dashboard"; // Adjust path
import InsuereDashboard from "./pages/insurer/dashboard"; // Adjust path
import UserDashboard from "./pages/user/dashboard"; // Adjust path
import ForgotPassword from "./pages/auth/forgot-password"; // Adjust path
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/done" element={<Done />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/insurer/dashboard" element={<InsuereDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
} 
export default App;
