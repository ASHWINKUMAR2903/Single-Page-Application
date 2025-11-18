# Single Page Application
## NAME : ASHWIN KUMAR A
## REG.NO : 212222100006
## AIM
To develop a Single Page Application (SPA) using React.js and React Router

## PROGRAM 
### main.jsx
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### App.jsx
```
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
```
### ProtectedRoute.jsx
```
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuth = localStorage.getItem("loggedIn");

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
```
### pages/Home.jsx
```
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link> |{" "}
      <Link to="/dashboard/profile">Go to Dashboard</Link>
    </div>
  );
}
```
### pages/Login.jsx
```
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("loggedIn", "true");
    navigate("/dashboard/profile");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
```
### pages/Dashboard.jsx
```
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link> |{" "}
        <Link to="notifications">Notifications</Link> |{" "}
        <button onClick={logout}>Logout</button>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
```
## OUTPUT
<img width="1920" height="1080" alt="Screenshot 2025-11-18 114124" src="https://github.com/user-attachments/assets/96718a5d-7448-46bb-9f96-3712d5f33ff5" />
<img width="1920" height="1080" alt="Screenshot 2025-11-18 114134" src="https://github.com/user-attachments/assets/5c66ebf9-9329-463e-bbde-6c5031d4ed03" />


## RESULT
A functional SPA with proper navigation and authentication-based protected routesusing modern React.
