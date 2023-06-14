import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Col12 from "./components/col12";
import NavBar from "./components/NavBar";
import Components from "./components/pages/components";
import Signup from "./components/pages/Signup/signup";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" Component={Components}/>
        <Route path="/signup" Component={Signup}/>

      </Routes>
    </>
  );
}

export default App;
