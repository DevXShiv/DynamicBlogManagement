import { useParams } from "react-router-dom";
import { useEffect } from "react";

function BlogDetails({ blogs, setBlogs }) {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  useEffect(() => {
    if (!blog) return;

    setBlogs(prev =>
      prev.map((b) =>
        b.id === blog.id ? { ...b, views: b.views + 1 } : b
      )
    );
  }, []);

  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h2>{blog.title}</h2>
      <p>Views: {blog.views}</p>
      <hr />
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;