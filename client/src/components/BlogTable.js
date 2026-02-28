function BlogTable() {
  return (
    <div className="blog-table">
      <h3>My Blogs</h3>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>React Basics</td>
            <td>120</td>
            <td>45</td>
            <td>Published</td>
          </tr>
          <tr>
            <td>Advanced JS</td>
            <td>90</td>
            <td>30</td>
            <td>Draft</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BlogTable;