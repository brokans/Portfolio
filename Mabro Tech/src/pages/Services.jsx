import React from "react";
import styles from "../css/Services.module.css";
import Styles from "../css/Contact.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className={styles.servicesContainer}>
        <h1>Teenused</h1>
        <hr />
        <h4>Maalritööd</h4>
        <p>
          Maalerdame kortereid, maju ja kontoriruume, pakkudes kvaliteetset
          teenust ja professionaalset lähenemist igale projektile. Teostame
          seinte ja lagede pahteldamist ning värvimist vastavalt kliendi poolt
          valitud toonidele.
        </p>
        <h4>Vaheseinad ja ripplaed</h4>
        <p>
          Paigaldame kvaliteetseid vaheseinu ja ripplagesid, et kujundada
          mugavad ja funktsionaalsed ruumid vastavalt kliendi soovidele ja
          vajadustele.
        </p>
        <h4>Siseviimistlus</h4>
        <p>
          Paigaldame parketti ja liiste, loome stiilse ja hubase sisekujunduse.
          Seintele paigaldame tapeeti või dekoratiivkive. Soovi korral aitame ka
          mööbli kokkupanekul.
        </p>
        <h4>Väiketööd ja lõpetamata projektid</h4>
        <p>
          Pakume abi ka väikeste tööde ja lõpetamata projektide puhul. Olgu need
          remonttööd, viimistlus või muu abi - meie meeskond on valmis aitama.
        </p>
        <p>
          Kui vajad täpsemat hinnapakkumist või soovid küsida konkreetse töö
          kohta, võta julgelt ühendust.
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/contacts#contact-form" style={{ textDecoration: "none" }}>
            <Button
              variant="secondary"
              type="button"
              className={Styles.submitButton}
            >
              Saada päring
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
