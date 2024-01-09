import { useState } from "react";
import axios from "axios";

const Modal = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    error: ""
  });

  const projectID = "d383be82-88b1-4418-8733-60c1a6bab5ed";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": userDetails.username,
      "User-Secret": userDetails.password
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject
      });

      localStorage.setItem("username", userDetails.username);
      localStorage.setItem("password", userDetails.password);

      window.location.reload();
      setUserDetails({...userDetails, username: "", password: ""})
    } catch (err) {
      setUserDetails({...userDetails, error: "Oops, incorrect credentials."})
    }
  };

  function handleChange(e){
    setUserDetails({...userDetails, [e.target.name] : e.target.value})
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{userDetails.error}</h1>
      </div>
    </div>
  );
};

export default Modal;
