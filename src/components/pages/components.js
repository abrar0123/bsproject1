import React from 'react'
import Header from "../header";
import Col12 from "../col12";
// import NavBar from '../NavBar';
import Alert from "../alert";
import Buttons from "../Buttons";
import Buttongroups from "../buttongroups";
import Cards from "../cards";
import Card2 from "../card2";
import Carousel from "../carousel";
import Dropdown from "../dropdown";
import Model from "../model";
import Pagination from "../pagination";
import Placeholder from "../placeholder";
import Progressbar from "../progressbar";
import Scrollpy from "../scrollpy";
import Spinner from "../spinner";
import Topic from "../aaa/topic";
import Badeg from "../badeg";

export default function components() {
  return (
    <div>
        
      <Topic>1. Spinner</Topic>
      <Spinner />

      <Topic>2. Alert</Topic>
      <Alert />

      <hr />
      <Topic>2.1 Badge</Topic>
      <Badeg />

      <hr />

      <Topic>3. Buttons</Topic>
      <Buttons />

      <hr />
      <Topic>4. Model</Topic>
      <Model />
      <hr />
      <Topic>5. Pagination</Topic>
      <Pagination />
      <hr />
      <Topic>6. Placeholder</Topic>

      <Placeholder />
      <hr />
      <Topic>7. Progressbar</Topic>
      <Progressbar />
      <hr />
      <Topic>8. Scrollpy</Topic>

      <Scrollpy />
      <hr />
      <Topic>9. Buttongroups</Topic>

      <Buttongroups />
      <hr />
      <Topic>10. Dropdown</Topic>

      <Dropdown />
      <hr />
      <Topic>11. Cards</Topic>

      <Cards />
      <hr />
      <Topic>12. Cards2</Topic>
      <Card2 />
      <hr />
      <Topic>13. Carousel</Topic>

      <Carousel />
      <hr />
      <Topic>14. Header</Topic>
      <Header />
      <hr />
      <Topic>15. Col12</Topic>

      <Col12 />
    </div>
  )
}
