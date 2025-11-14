import axiosInstance from "../axios.instance";

export const createBlogRequest = async (blog) =>
  axiosInstance.post("/blogs/create", blog);

export const searchBlogsRequest = async (requestParams) =>
  axiosInstance.get("/blogs/search", { params: requestParams });

//

export const updateBlogRequest = async (blogId, blog) =>
  axiosInstance.put(`/blogs/update/${blogId}`, blog);

export const deleteBlogRequest = async (blogId) =>
  axiosInstance.delete(`/blogs/delete/${blogId}`);
