import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Col12 from "./components/col12";
import NavBar from "./components/NavBar";
import Alert from "./components/alert";
import Buttons from "./components/Buttons";
import Buttongroups from "./components/buttongroups";
import Cards from "./components/cards";
import Card2 from "./components/card2";


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
      <Cards />
      <hr />
      <Card2 />
      <hr />
      <Header />
      <hr />

      <Col12 />
    </>
  );
}

export default App;
