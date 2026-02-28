import { useState } from "react";
import "../App.css";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, category, content });

    alert("Blog Added Successfully ✅");

    setTitle("");
    setCategory("");
    setContent("");
  };

  return (
    <div className="addblog-container">
      <div className="addblog-card">
        <h2>Add New Blog</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <textarea
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            required
          />

          <button type="submit">Publish Blog</button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;