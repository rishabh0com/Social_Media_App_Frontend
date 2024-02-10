import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Posts = () => {
  const [posts, setposts] = useState(["no posts"]);
  const [addpost, setAddPost] = useState({});
  console.log("posts", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { userId } = JSON.parse(localStorage.getItem("userInfo"));
        console.log("userId", userId);
        const res = axios.get(`http://localhost:8080/posts?userId=${userId}`, {
          withCredentials: true,
        });
        const resData = await res;
        console.log("res", resData);
        setposts(resData.data.posts);
      } catch (error) {
        setAddPost(["No posts"]);
      }
    };
    fetchPosts();
  }, []);

  const postChange = (e) => {
    const { name, value } = e.target;
    setAddPost({ ...addpost, [name]: value });
    console.log(addpost);
  };
  const postSubmit = async (e) => {
    e.preventDefault();
    const { userId } = JSON.parse(localStorage.getItem("userInfo"));
    setAddPost({ ...addpost, userId: userId });
    console.log("userId", userId);

    console.log("addpost", addpost);
    const res = await axios.post(`http://localhost:8080/posts/add`, addpost, {
      withCredentials: true,
    });
    const resData = await res;
    console.log(resData.data);
    resData.data.message && alert(resData.data.message);
  };

  return (
    <div>
      <Navbar />
      <h1>Posts Page</h1>
      <div>
        <h2>Create Post</h2>
        <form onSubmit={postSubmit}>
          <div>
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={postChange}
            />
          </div>
          <div>
            <label htmlFor="device">Device : </label>
            <input
              type="text"
              placeholder="device"
              name="device"
              onChange={postChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body : </label>
            <input
              type="text"
              placeholder="body"
              name="body"
              onChange={postChange}
            />
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
      <p>This is a page where you can view all the blog posts.</p>
      <div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>Title : {post.title}</h2>
              <h3>Device : {post.device}</h3>
              <p>Body : {post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
