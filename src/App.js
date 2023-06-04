import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Col12 from "./components/col12";
import NavBar from "./components/NavBar";
import Alert from "./components/alert";
import { Button } from "bootstrap";
import Buttons from "./components/Buttons";
function App() {
  return (
    <>
      <NavBar />

      <hr />

      <Alert />
      <hr />
      <Buttons />
      <hr />

      <Header />
      <hr />

      <Col12 />
    </>
  );
}

export default App;
