import Blog from "../model/Blog.js";

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json({ blogs });
};

export const postBlogs = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(201).json({ success: true, blog });
};
