import React from "react";
export default function col12() {
  return (
    <div className="container">
      <div className="row" style={{ border: "1px solid black" }}>
        <div className="col-8" style={{ border: "1px solid green" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
          libero. Id cupiditate ex voluptates minima iure saepe perferendis quae
          magnam, blanditiis dicta magni aut corrupti nemo repudiandae nobis
          quam. Esse?
        </div>
        <div className="col-4" style={{ border: "1px solid green" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
          libero. Id cupiditate ex voluptates minima iure saepe perferendis quae
          magnam, blanditiis dicta magni aut corrupti nemo repudiandae nobis
          quam. Esse?
        </div>
      </div>
    </div>
  );
}
