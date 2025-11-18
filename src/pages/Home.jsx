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