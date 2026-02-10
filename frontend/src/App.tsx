import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route
        path="/"
        element={
          <div>
            <h1>Welcome to the RealTimeChat App</h1>
            <Link to="/auth/sign-in">Sign In</Link>
            <Link to="/auth/sign-up" className="ml-4">
              Sign Up
            </Link>
          </div>
        }
      />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
