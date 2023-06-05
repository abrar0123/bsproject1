import React from "react";

export default function dropdown() {
  return (
    <div className="container d-flex">
      <div class="dropdown">
        <a
          class="btn btn-success dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          {/* <hr /> */}
          <li>
            <a class="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </div>
      {/*  */}
      <div class="btn-group dropup">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropup
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
