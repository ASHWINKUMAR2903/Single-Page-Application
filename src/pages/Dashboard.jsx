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