import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/author" className="sidebar-link">Dashboard</Link>
      <Link to="/author" className="sidebar-link">My Blogs</Link>
      <Link to="/add-blog" className="sidebar-link">Add Blog</Link>
      <Link to="/author" className="sidebar-link">Comments</Link>
      <Link to="/author" className="sidebar-link">Analytics</Link>
    </div>
  );
}

export default Sidebar;