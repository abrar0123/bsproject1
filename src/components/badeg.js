import React from "react";

export default function badeg() {
  return (
    <div className="container">
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
    </div>
  );
}
