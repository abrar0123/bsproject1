import React from "react";
import "./topic.css";

export default function topic(props) {
  return (
    <div className="topic">
      <h2>{props.children} </h2>
    </div>
  );
}
