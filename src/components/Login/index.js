import React, { useRef, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
export const Login = () => {
  const form = useRef();
  const { userReducer } = useSelector((state) => {
    return state;
  });

  let[errors, setErrors] = useState([]);
  const login = (e) => {
    e.preventDefault();
    errors = [];
    const [email, password] = [form.current[0].value, form.current[1].value];
    const user = userReducer.users.filter((user) => {
      return user.email.toLowerCase() == email.toLowerCase();
    });
    if (user.length) {
      console.log(password, user);
      if (user[0].username === password) {
      } else {
        setErrors([...errors,"Wrong Password"])
      }
    }else{
      setErrors([...errors,"Invalid Email"])
    }
  };
  return (
    <div className="form-div">
      <form onSubmit={login} ref={form}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div>
          {errors.map((error) => {
            return <small>{error}</small>;
          })}
        </div>
        <input type="submit" className="btn btn-primary" value={"Login"} />
      </form>
    </div>
  );
};
