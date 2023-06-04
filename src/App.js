import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Col12 from "./components/col12";
import NavBar from "./components/NavBar";
import Alert from "./components/alert";
function App() {
  return (
    <>
      <NavBar />
      <Alert />
      <Header />
      <Col12 />
    </>
  );
}

export default App;
