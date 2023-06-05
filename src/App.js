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
import Carousel from "./components/carousel";
import Dropdown from "./components/dropdown";
import Model from "./components/model";
import Pagination from "./components/pagination";
import Placeholder from "./components/placeholder";
import Progressbar from "./components/progressbar";
import Scrollpy from "./components/scrollpy";
import Spinner from "./components/spinner";

function App() {
  return (
    <>
      <NavBar />
    <hr />
<Spinner/>

      <Alert />
      
      <hr />
      <Buttons />
      <hr />
      <Model />
      <hr />
      <Pagination />
      <hr />
      <Placeholder />
      <hr />
      <Progressbar />
      <hr />
      <Scrollpy />
      <hr />
      <Buttongroups />
      <hr />
      <Dropdown />
      <hr />

      <Cards />
      <hr />
      <Card2 />
      <hr />
      <Carousel />
      <hr />
      <Header />
      <hr />

      <Col12 />
    </>
  );
}

export default App;
