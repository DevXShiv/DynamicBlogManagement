function ReaderDashboard({ blogs }) {
  return (
    <div className="dashboard-container">
      <h2 style={{ padding: "20px" }}>Reader Dashboard</h2>

      <div className="blog-grid">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.content.substring(0, 80)}...</p>
              <p>Views: {blog.views}</p>
            </div>
          ))
        ) : (
          <p style={{ padding: "20px" }}>No Blogs Yet</p>
        )}
      </div>
    </div>
  );
}