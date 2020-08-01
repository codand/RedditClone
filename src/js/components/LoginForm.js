import React, { useState } from "react";
import { connect } from "react-redux";
// import redditIcon from "../../reddit.ico";
import { login } from "../features/auth";

const LoginForm = ({ dispatch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password);
    dispatch(login({ username, password }));
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      /> */}
      <button type="submit">
        {/* <img className="icon" src={redditIcon}></img> */}
        Sign in with Reddit
      </button>
    </form>
  );
};

export default connect()(LoginForm);
