import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("dean");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);
    const blogsUrl = "http://localhost:5000/blogs";
    setTimeout(() => {
      fetch(blogsUrl, {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then((res) => {
        setIsLoading(false);
        history.push("/");
        console.log(res);
      });
    }, 500);
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="dean">Dean</option>
          <option value="yarin">Yarin</option>
        </select>
        {!isLoading && <button>Add blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
