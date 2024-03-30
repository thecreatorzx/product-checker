import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [match, setMatch] = useState("");
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
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
    if (!email.toLowerCase().endsWith("@gmail.com")) {
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
        email: email,
        password: password,
        name: name,
        username: username,
      });
      console.log("response", response.data.msg); // Handle response from server
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response.data.msg);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    reset();
    console.log(email, password);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      setLogged(response.data.success);
      console.log("response", response.data.msg); // Handle response from server
      setName(response.data.data.name);
      setUsername(response.data.data.username);
      navigate("/");
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
    handleSignUp: handleSignUp,
    handleLogin: handleLogin,
    confPass: confPass,
    setConfPass: setConfPass,
    match: match,
    logged,
  };
  return (
    <div className="App">
      <Nav {...props} />
      <Routes>
        <Route path="/signup" element={<SignUp {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/profilePage" element={<ProfilePage {...props} />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
