import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Col12 from "./components/col12";
import NavBar from "./components/NavBar";
import Alert from "./components/alert";
import Buttons from "./components/Buttons";
import Buttongroups from "./components/buttongroups";
function App() {
  return (
    <>
      <NavBar />

      <hr />

      <Alert />
      <hr />
      <Buttons />
      <hr />
      <Buttongroups />
      <hr />

      <Header />
      <hr />

      <Col12 />
    </>
  );
}

export default App;
