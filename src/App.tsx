import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login"; // Adjust path
import Otp from "./pages/auth/otp"; // Adjust path
import Register from "./pages/auth/register"; // Adjust path
import ConfirmPassword from "./pages/auth/confirm-password"; // Adjust path
import Done from "./pages/auth/done"; // Adjust path
import Welcome from "./pages/landing/index";
import AdminDashboard from "./pages/admin/dashboard"; // Adjust path
import InsuereDashboard from "./pages/insurer/dashboard"; // Adjust path
import UserDashboard from "./pages/user/dashboard"; // Adjust path
import ForgotPassword from "./pages/auth/forgot-password"; // Adjust path
import { ThemeProvider } from "@/components/theme-provider";
import Choose from "./pages/auth/choose";
import MotorInsurance from "./pages/landing/motor-Insurance";
import OnboardingFlow from "./pages/user/OnBoardingFlow";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/motor-insurance" element={<MotorInsurance />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/done" element={<Done />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/insurer/dashboard" element={<InsuereDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/onboardingflow" element={<OnboardingFlow />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
