import ThemeToggle from "./ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const isProtectedPage =
    location.pathname === "/dashboard" ||
    location.pathname === "/profile";

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>

      <h2 style={{cursor:"pointer"}} onClick={()=>navigate("/")}>
        Smart Expense Planner
      </h2>

      <div>
        <ThemeToggle/>

        {token && isProtectedPage && (
          <button style={{marginLeft:"10px"}} onClick={logout}>
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}
