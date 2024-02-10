import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetail({ ...loginDetail, [name]: value });
  };

  const userLogin = async (loginDetail) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/users/login",
        loginDetail,
        {
          withCredentials: true,
        }
      );
      const resData = await res;
      console.log("above if",resData.data)
      if (resData.data) {
        const { name, email, _id } = resData.data.user;
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ name, email, userId: _id })
        );
        localStorage.setItem("access", true);
      }
      console.log("in login controller", resData.data)
      return resData.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        console.log("login Error", error);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(loginDetail);
    console.log("in login page", res);
    res && alert(res.message);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email Address : </label>
            <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />

        </div>
        <div>
            <label htmlFor="password">Password : </label>
            <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
