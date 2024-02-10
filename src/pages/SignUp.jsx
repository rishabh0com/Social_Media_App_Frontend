import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userDetail, setUserDetail] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(userDetail);
    res && alert(res.message);
    console.log("details", userDetail);
  };

  const register = async (userDetail) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/users/register",
        userDetail,
        { withCredentials: true }
      );
      const resData = await res;
      console.log("in register controller", resData);
      return resData.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        console.log("register Error", error);
      }
    }
  };
  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="">Name: </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <label htmlFor="">Password :</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <div>
            <label htmlFor="">Email: </label>
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="">Gender : </label>
            <input
          type="text"
          name="gender"
          placeholder="gender"
          onChange={handleChange}
        />

        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">
          <div className="link">Log in</div>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
