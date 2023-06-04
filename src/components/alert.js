import React from "react";

export default function () {
  return (
    <div className="container mt-4">
      <div class="alert alert-secondary " role="alert">
        A simple primary alert—check it out!
      </div>
      {/* baddge classes */}

      <div className="py-3">
        <h3>
          heading of badge{" "}
          <span className="badge rounded-pill bg-primary">Account </span>{" "}
        </h3>
        <button type="button" class="btn btn-primary position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        <button type="button" class="btn btn-primary position-relative mx-5">
          Profile
          <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </button>
        <button type="button" class="btn btn-primary">
          Notifications <span class="badge text-bg-secondary">4</span>
        </button>
      </div>
      {/* end of badge classes */}
      <div class="alert alert-success " role="alert">
        <h4 class="alert-heading">
          Well done! <span className="badge bg-primary">badge</span>
        </h4>
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
