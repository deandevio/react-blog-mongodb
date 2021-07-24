import useFetch from "./usefetch.js";
import BlogList from "./BlogList.js";

const Home = () => {
  const url = "http://localhost:5000/blogs";
  const { data: blogs, isLoading, error } = useFetch(url);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
