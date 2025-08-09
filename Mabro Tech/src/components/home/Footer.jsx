import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer
        className="custom-footer"
        class="text-center text-md-start text-muted pt-1"
        data-bs-theme="dark"
      >
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>
                  <strong>Mabro Tech OÜ</strong>
                </p>
                <p>
                  <span style={{ whiteSpace: "nowrap" }}>
                    Registrikood: 17278449
                  </span>
                </p>
                <p>Rivi 4-92, Tallinn, 11316</p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <h6 class="text-uppercase fw-bold mb-4"></h6>
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
                </p> */}
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> <> </>
                  mariobrokans@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> + 372 56 778 527
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          <p className="footer-copyright">
            © 2023 mabrotechy.eu
            <br />
            Kõik õigused kaitstud.
            <br />
            All trademarks are the property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
