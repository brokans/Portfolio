import React from "react";

function Footer() {
  return (
    <div>
      <footer
        class="text-center text-lg-start bg-light pt-1"
        data-bs-theme="light"
      >
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contacts</h6>
                <p>
                  <a
                    href="https://www.linkedin.com/in/mario-brokans-904461175/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-reset"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/brokans?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-reset"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Service links</h6>
                <p>
                  <a
                    href="https://development.ee/javascript-react-nullist-front-end-spetsialistiks-intensiivope/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-reset"
                  >
                    Aurora Development
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.coursera.org/specializations/python-3-programming#courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-reset"
                  >
                    Coursera
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.udemy.com/course/modern-interior-blender/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-reset"
                  >
                    Udemy
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  mariobrokans@gmail.com
                </p>
                <p>
                  + 372 56 778 527
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          © 2025 Copyright All rights reserved. <br />
          All trademarks are the property of their respective owners.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
