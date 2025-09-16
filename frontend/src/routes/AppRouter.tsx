// import DashBoardHome from "@/components/Dashboard/DashBoardHome";
import EmailOtp from "@/pages/AuthPages/EmailOtp";
import ForgetEmailVerified from "@/pages/AuthPages/ForgetEmailVerified";
import LoginPage from "@/pages/AuthPages/Login";
import ResetPassword from "@/pages/AuthPages/ResetPassword";
import SignUp from "@/pages/AuthPages/SignUp";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./PrivateRoute/ProtectedRoute";
import Page from "@/components/Dashboard/DashBoardHome";


function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Page />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/email-verification" element={<ForgetEmailVerified />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/otp" element={<EmailOtp />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRouter;
