import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="name" name="name" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
