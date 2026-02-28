import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import BlogTable from "../components/BlogTable";

function AuthorDashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="dashboard-body">
        <Sidebar />

        <div className="dashboard-content">
          <h2>Dashboard Overview</h2>

          <div className="stats-grid">
            <StatCard title="Total Views" value="12,540" />
            <StatCard title="Total Likes" value="3,280" />
            <StatCard title="Comments" value="890" />
          </div>

          <BlogTable />
        </div>
      </div>
    </div>
  );
}

export default AuthorDashboard;