import React from "react";
import styles from "../css/Contacts.module.css";
import { Contact } from "../components/home/Contact";

function Contacts() {
  return (
    <div>
      <div className={styles.contactsContainer}>
        <h1>Meist</h1>
        <p>
          Meie ettevõte on küll uus, kuid kogemused on pikaajalised. Oleme
          peamiselt spetsialiseerunud siseviimistlustöödele, tegeleme korterite
          ja majade maalerdusega, ehitame vaheseinu ja ripplagesid, paigaldame
          tapeeti ja värvime maju. Oleme ette võtnud ka korterite
          kapitaalremonti, mille tegime ära koos koostööpartneritega, kes
          aitasid torutööde ja elektritöödega. Kapitaalremontide käigus
          paigaldasime parketi, kruvisime ette uksed, eemaldasime vana vannitoa
          ja tualeti ning ehitasime uue suure vannitoa. Vannitoas valasime
          põranda ja plaatisime nii põranda kui ka seinad, riputasime seintele
          kapid ja valamud ning panime kokku ka kogu mööbli.
        </p>
        <p>
          Meie eesmärk on pakkuda klientidele parimat võimalikku teenust,
          keskendudes kliendi soovidele, kvaliteedile ja usaldusväärsusele.
        </p>
        <br />
        <p><strong><a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>Mabro Tech OÜ</a></strong></p>
        <p>e-Mail: <a href="mailto:mabrotechy@gmail.com" className={styles.emailLink}>mabrotechy@gmail.com</a></p>
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