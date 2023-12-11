import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListToDo from "./ToDo/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav/nav";
import About from "./About/about";
import Home from "./Home/Home";
import ListUsers from "./Users/ListUsers";
import DetailUser from "./Users/DetailUser";
function App() {
  console.log("CHeckkkkkkkkk");
  return (
    <div className="App">
      <Nav />
      <div className="App-header">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<ListToDo />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/:userId" element={<DetailUser />} exact />
        </Routes>
        {/* <MyComponent /> */}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
