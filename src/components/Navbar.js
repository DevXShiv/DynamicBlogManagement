import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <h2 className="logo">BlogSphere</h2>

      <div className="profile-menu">
        <span 
          className="profile-trigger"
          onClick={() => setOpen(!open)}
        >
          Shivanshu ▼
        </span>

        {open && (
          <div className="dropdown">
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;