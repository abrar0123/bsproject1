import React from "react";

export default function () {
  return (
    <div className="container mt-4">
      <div class="alert alert-secondary " role="alert">
        A simple primary alert—check it out!
      </div>
      <div class="alert alert-success " role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p class="mb-1">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>

      <div class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
