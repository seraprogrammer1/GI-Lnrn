import React from "react";

export default function header() {
  return (
    <nav>
      <div class="nav-wrapper blue">
        <div class="brand-logo">Lrnr</div>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Account</a>
          </li>
          <li>
            <a href="badges.html">Quiz Generation</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
