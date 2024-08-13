import React from "react";
export default function footer() {
  return (
    <div>
      <footer class="page-footer blue">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">
                Embrace the power of our app and unlock the secrets of the
                universe, one quiz at a time. As always say, 'Yesterday is
                history, tomorrow is a mystery,but today is a gift. That is why
                we call it the present.'
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Quiz Generator
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright blue-darken-4">
          <div class="container">Made by Materialize</div>
        </div>
      </footer>
    </div>
  );
}
