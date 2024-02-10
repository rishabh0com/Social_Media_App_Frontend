import React from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1>SignUp Page</h1>
      <form>
        <input type="text" placeholder="name" name="name" />
        <input type="password" placeholder="Password" name="password" />
        <input type="email" placeholder="email" name="email" />
        <input type="text" name="gender" placeholder="gender" />
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
