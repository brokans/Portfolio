import React from "react";
import styles from "../css/Services.module.css";

function Services() {
  return (
    <div>
      <div className={styles.servicesContainer}>
        <h1>Teenused</h1>
        <hr />
        <h4>Maalerdus</h4>
        <p>
          Maalerdame kortereid, maju ja kontoriruume, pakkudes kvaliteetset
          teenust ja professionaalset lähenemist igale projektile. Seisneb
          seinte ja lagede pahteldamises ja värvimises vastavalt kliendi valitud toonidele.
        </p>
        <h4>Vaheseinad-ripplaed</h4>
        <p>
          Paigaldame kvaliteetsed vaheseinad ja ripplaed, et luua mugavaid ja
          funktsionaalseid ruume vastavalt kliendi soovidele. 
        </p>
        <h4>Siseviimistlus</h4>
        <p>
          Paigaldame parketi ja liistud, et luua kaunis ja mugav sisekujundus.
          Seintele paigaldame dekoratiivkive või tapeedi ning aitame ka mööbli
          kokkupanemisel.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Services;
