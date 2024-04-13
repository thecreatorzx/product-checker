import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Docs from "./components/Docs";
import How from "./components/How";
import Profile from "./components/Profile";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, username, email, password);
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
        <Route path="/docs" element={<Docs />} />
        <Route path="/how" element={<How />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
