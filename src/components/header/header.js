import { Button } from "bootstrap";
import React from "react";
import "../style.css";

export default function header() {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <div className="row"></div>
      <div className="row">row1</div>
      <div className="row">
        <div className="col-6">new c1</div>
        <div className="col">new c1 </div>
      </div>
      <div className="row row-cols-4">
        <div className="col">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          odio obcaecati placeat vitae aut dicta quaerat dolorum quo cumque
          ipsam, iste temporibus doloremque aperiam voluptas qui iusto magni
          cupiditate. Dolores.
        </div>
        <div className="col">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          odio obcaecati placeat vitae aut dicta quaerat dolorum quo cumque
          ipsam, iste temporibus doloremque aperiam voluptas qui iusto magni
          cupiditate. Dolores.{" "}
        </div>
        {/* <div className="w-100"></div> */}
        <div className="col">col 3</div>
        <div className="col">col 4</div>
        <div className="col">col 5</div>
        <div className="col">col 6</div>
      </div>
    </div>
  );
}
