import { createContext, useContext, useEffect, useState } from "react";
import {
  createBlogRequest,
  searchBlogsRequest,
} from "../api/requests/blogs.request";
import {
  createCommentRequest,
  searchCommentsRequest,
} from "../api/requests/comments.request";

const BlogContext = createContext();

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("useBlogs must be used within a BlogsProvider");
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [modifiedBlogs, setModifiedBlogs] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    searchBlogs();
    setModifiedBlogs(false);
    setErrors([]);
  }, [modifiedBlogs]);

  const createBlog = async (blogData) => {
    try {
      const res = await createBlogRequest(blogData);
      if (res.status === 201) {
        setModifiedBlogs(true);
        return true;
      }
    } catch (error) {
      console.log(error);
      setErrors([error.response?.data?.message || "Error al crear el blog"]);
      return false;
    }
  };

  const searchBlogs = async (params) => {
    try {
      const res = await searchBlogsRequest(params);
      if (res.status === 200 && res.data) {
        setBlogs(res.data);
      }
    } catch (error) {
      console.log(error);
      setErrors([error.response?.data?.message || "Error al cargar los blogs"]);
    }
  };


  const createComment = async (commentData) => {
    try {
      const res = await createCommentRequest(commentData);
      if (res.status === 201) {
        setModifiedBlogs(true);
        return true;
      }
    } catch (error) {
      console.log(error);
      setErrors([
        error.response?.data?.message || "Error al crear el comentario",
      ]);
      return false;
    }
  };

  const searchComments = async (params) => {
    try {
      const res = await searchCommentsRequest(params);
      if (res.status === 200 && res.data) {
        setComments(res.data);
      }
    } catch (error) {
      console.log(error);
      setErrors([
        error.response?.data?.message || "Error al cargar los comentarios",
      ]);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        comments,
        errors,
        setErrors,
        setModifiedBlogs,
        createBlog,
        searchBlogs,
        createComment,
        searchComments,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
