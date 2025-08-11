import React from "react";
import styles from "../css/Contacts.module.css";
import { Contact } from "../components/home/Contact";

function Contacts() {
  return (
    <div>
      <div className={styles.contactsContainer}>
        <h1>Meist</h1>
        <hr />
        <p>
          Meie ettevõte on küll uus, kuid meie meeskonnal on pikaajaline kogemus
          siseviimistlustöödes. Oleme spetsialiseerunud korterite ja majade
          maalerdusele, vaheseinte ja ripplagede ehitamisele, tapeedi
          paigaldamisele ning fassaadide ja sisepindade värvimisele. Lisaks
          oleme teinud ka korterite kapitaalremonte koostöös usaldusväärsete
          partneritega, kes tegelevad toru- ja elektritöödega. Kapitaalremontide
          käigus oleme paigaldanud parkette, paigaldanud siseuksi, lammutanud
          vanu vannitube ja tualette ning ehitanud asemele uusi, avaramaid
          lahendusi. Oleme valanud põrandaid, plaatinud põrandaid ja seinu,
          paigaldanud vannitoamööblit, valamuid ning kokku pannud ka kogu
          ülejäänud mööbli. Meie eesmärk on pakkuda klientidele parimat
          võimalikku teenust, keskendudes nende soovidele, kvaliteedile ja
          usaldusväärsusele.
        </p>
        <p>
          Meie eesmärk on pakkuda klientidele parimat võimalikku teenust,
          keskendudes kliendi soovidele, kvaliteedile ja usaldusväärsusele.
        </p>
        <br />
        <p>
          <strong>
            <a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>
              Mabro Tech OÜ
            </a>
          </strong>
        </p>
        <p>
          e-Mail:{" "}
          <a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>
            mabrotechy@gmail.com
          </a>
        </p>
        <p>Tel: +37256778527</p>
        <p>Registrikood: 17278449</p>
        <p>Rivi 4-92, Tallinn, 11316</p>
      </div>
      <div id="contact-form">
        <Contact />
      </div>
    </div>
  );
}

export default Contacts;
