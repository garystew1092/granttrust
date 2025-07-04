import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import UserProvider from "./Context/userContext";
import HomePage from "./Pages/HomePage";
import DashboardAdmin from "./Pages/admin/DashboardAdmin";
import AuthPage from "./Pages/AuthPage";
import Dashboard from "./Pages/member/Dashboard";
import ContactUs from "./Pages/member/ContactUs";
import Service from "./Pages/member/Service";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            {/* Public Routes - only accessible when not logged in */}
            <Route path="/" element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            } />
            
            <Route path="/contact-us" element={
              <PublicRoute>
                <ContactUs />
              </PublicRoute>
            } />

            <Route path="/services" element={
              <PublicRoute>
                <Service />
              </PublicRoute>
            } />

            <Route path="/auth" element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            } />

            {/* User Routes */}
            <Route element={<PrivateRoute allowedRoles={["member"]} />}>
              <Route path="/user/dashboard" element={<Dashboard />} />
            </Route>

            {/* Admin Route */}
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </UserProvider>
  );
}

export default App;