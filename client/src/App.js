import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import ScanPage from "./components/ScanPage";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/userContext";
import { UserContextProvider } from "./context/userContext";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [match, setMatch] = useState("");
  const { log } = useContext(UserContext);
  const [logged, setLogged] = useState(log);
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
      toast.error("Please Enter a valid email!!");
      return;
    }
    if (password !== confPass) {
      setPassword("");
      setConfPass("");
      setMatch("passwords do not match");
      toast.error("Passwords do not match!!");
      return;
    }

    try {
      const response = await axios.post("/signup", {
        email,
        password,
        name,
        username,
      });
      if (!response.data.success) {
        toast.error(response.data.msg);
      } else {
        reset();
        navigate("/login");
        toast.success(response.data.msg); // Handle response from server
      }
    } catch (error) {
      console.error("Error:", error.response.data.msg);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      if (!response.data.success) {
        toast.error(response.data.msg);
      } else {
        reset();
        setLogged(response.data.success);
        toast.success("Login Successful");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleGLogin = async (data) => {
    try {
      const response = await axios.post("/gLogin", {
        data,
      });
      console.log(response);
      if (!response.data.success) {
        toast.error(response.data.msg);
      } else {
        navigate("/");
        setLogged(response.data.success);
        toast.success("Login Successful");
      }
    } catch (err) {
      console.log(err);
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
    logged: logged,
    setLogged: setLogged,
    handleGLogin: handleGLogin,
  };
  useEffect(() => {
    setLogged(log);
  }, []);
  return (
    <UserContextProvider>
      <Nav {...props} />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/signup" element={<SignUp {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/profilePage" element={<ProfilePage {...props} />} />
        <Route path="/scanPage" element={<ScanPage {...props} />} />
        <Route path="/" element={<Main {...props} />} />
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
