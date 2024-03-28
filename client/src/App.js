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
  const [confPass, setConfPass] = useState("");
  const [match, setMatch] = useState("");
  const reset = () => {
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setConfPass("");
    setMatch("");
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email.endsWith("@gmail.com")) {
      reset();
      setMatch("Please Enter a valid email");
      return;
    }
    if (password !== confPass) {
      setPassword("");
      setConfPass("");
      setMatch("passwords do not match");
      return;
    }
    reset();
    console.log(name, email, password);

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email: props.email,
        password: props.password,
        name: props.name,
        username: props.username,
      });
      console.log(response.data.message);
    } catch (error) {
       console.log(error.response.data.message); 
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      console.log(response.data.message); // Handle response from server
    } catch (error) {
      console.error(error.response.data.message);
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
    handleSignUp: handleSignUp,
    handleLogin: handleLogin,
    confPass: confPass,
    setConfPass: setConfPass,
    match: match,
  };
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp name={name} setName={setName} username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignUp={handleSignUp} />} />
        <Route path="/login" element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
