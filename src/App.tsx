import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { RoleLayout } from "./layouts/RoleLayout";
import { AuthProvider } from "./context/AuthContext";
import VerificationForm from "./components/Broker/VerificationForm";
import InsuranceCards from "./components/Broker/ProductClass";
import ManageListings from "./pages/insurer/ManageListings";
import ListingForm from "./pages/insurer/ListingForm";

const InsurerHome = () => <h1>Insurer Home</h1>;
const InsurerListings = () => <h1>Insurer Listings</h1>;
const AdminHome = () => <h1>Admin Home</h1>;
const AdminListings = () => <h1>Admin Listings</h1>;

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/insurer/home" replace />} />

          <Route path="/insurer" element={<RoleLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<InsurerHome />} />
            <Route path="listings" element={<ManageListings />} />
            <Route path="new-listing" element={<ListingForm />} />
          </Route>

          <Route path="/admin" element={<RoleLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="listings" element={<AdminListings />} />
          </Route>

          <Route path="/customer" element={<RoleLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<InsuranceCards />} />
          </Route>
          <Route
            path="/customer/Verification"
            element={<VerificationForm />}
          ></Route>

          <Route path="*" element={<Navigate to="/insurer/home" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
