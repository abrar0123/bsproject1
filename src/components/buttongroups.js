import React from "react";

export default function buttongroups() {
  return (
    <div className="container">
      <div className="containers">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-primary">
            Left
          </button>
          <button type="button " class="btn btn-primary active">
            Middle
          </button>
          <button type="button" class="btn btn-outline-primary">
            Right
          </button>
          {/* drop down */}
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* check boxes */}
      <div
        class="btn-group mt-3"
        role="group "
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          class="btn-check"
          id="btncheck1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-primary" for="btncheck1">
          Checkbox 1
        </label>

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck2"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btncheck2">
          Checkbox 2
        </label>

        <input
          type="checkbox"
          class="btn-check"
          id="btncheck3"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btncheck3">
          Checkbox 3
        </label>
      </div>
      {/* jk */}
    </div>
  );
}
