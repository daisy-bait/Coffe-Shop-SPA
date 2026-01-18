import { createContext, useContext, useEffect, useState } from "react";
import {
  createBlogRequest,
  deleteBlogRequest,
  searchBlogsRequest,
} from "../api/requests/blogs.request";
import {
  createCommentRequest,
  deleteCommentRequest,
  searchCommentsRequest,
} from "../api/requests/comments.request";
import { useAuth } from "./AuthContext";

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

  const { roles } = useAuth();

  useEffect(() => {
    const params = roles.length === 1 && roles.includes("CUSTOMER") ? { enabled: true } : {};
    searchBlogs(params);
    searchComments(params);
    setModifiedBlogs(false);
    setErrors([]);
  }, [modifiedBlogs, roles]);

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

  const deleteBlog = async (blogId) => {
    try {
      const res = await deleteBlogRequest(blogId);
      if (res.status === 200) {
        setModifiedBlogs(true);
        return true;
      }
    } catch (error) {
      console.log(error);
      setErrors([
        error.response?.data?.message || "Error al eliminar el blog",
      ]);
      return false;
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const res = await deleteCommentRequest(commentId);
      if (res.status === 200) {
        setModifiedBlogs(true);
        return true;
      }
    } catch (error) {
      console.log(error);
      setErrors([
        error.response?.data?.message || "Error al eliminar el comentario",
      ]);
      return false;
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        comments,
        errors,
        modifiedBlogs,
        setErrors,
        setModifiedBlogs,
        createBlog,
        searchBlogs,
        createComment,
        deleteComment,
        deleteBlog,
        searchComments,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
