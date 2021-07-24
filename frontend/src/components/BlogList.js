import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  blogs = Object.values(blogs.blogs);

  return (
    <div className="blog-title">
      <h1>{title}</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>
              <h4>{blog.title}</h4>
              <p>{blog.body}</p>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
