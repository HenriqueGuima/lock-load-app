import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const initState = {
    name: "",
    password: "",
    description: "",
  };
  const [credential, setCredential] = useState(initState);
  const { name, password, description } = credential;

  const addCredential = async (e) => {
    const response = await axios.post(
      "http://localhost:3005/credentials",
      credential
    );
    console.log(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCredential(credential);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  return (
    <>
      <h1>add new credential</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={name}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={handleInputChange}
            value={password}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
            value={description}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
