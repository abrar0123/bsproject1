import React from "react";

export default function Buttons() {
  return (
    <>
      <div className="container">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-danger px-5">
          Danger
        </button>
        <button type="button" class="btn btn-warning mx-2">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>

        <button type="button" class="btn btn-link">
          Link
        </button>
        {/* second  */}
      </div>
      <div className="container py-2">
        <button type="button" class="btn btn-outline-primary" disabled>
          Primary
        </button>
        <button type="button" class="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-outline-success btn-sm mx-3">
          Success
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{
            paddingTop: ".25rem",
            paddingBottom: ".25rem",
            paddingLeft: ".5rem",
            paddingRight: ".5rem",
            fontSize: ".75rem",
          }}
        >
          Custom button
        </button>
      </div>
      {/* block buttons */}
      <div class="container d-grid gap-2 d-md-block">
        <button class="btn btn-primary" type="button">
          Button
        </button>
        <button class="btn btn-primary" type="button">
          Button
        </button>
      </div>{" "}
    </>
  );
}
