import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email: props.email,
        password: props.password,
        name: props.name,
      });
      console.log(response.data.msg); // Handle response from server
    } catch (error) {
      console.error("Error:", error.response.data.msg);
    }
  };
  let props = {
    name: name,
    setName: setName,
    username: username,
    setUsername: setUsername,
    email: email,
    setEmail: setEmail,
    password: password,
    setPassword: setPassword,
    handleSubmit: handleSubmit,
  };
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
