import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Modal from "react-bootstrap/Modal";
import { Contact } from "../components/home/Contact";
import styles from "../css/HomePage.module.css";
import { useTranslation } from "react-i18next";

const images = [
  "https://i.postimg.cc/7PSKL3dD/20250414-111604.jpg",
  "https://i.postimg.cc/sDNPCTfm/20250414-113401.jpg",
  "https://i.postimg.cc/2Sh921nC/20250414-112315.jpg",
  "https://i.postimg.cc/jq3150sY/20250414-112815.jpg",
  "https://i.postimg.cc/vBq0cfwt/20250414-114926.jpg",
  "https://i.postimg.cc/1RdWSGH9/20250414-133916.jpg",
  "https://i.postimg.cc/wTswj1fD/20250414-134337.jpg",
  "https://i.postimg.cc/FRbVL6kv/DSC-0121.jpg",
  "https://i.postimg.cc/rm29zTmg/DSC-0122.jpg",
  "https://i.postimg.cc/wxcwy1DN/DSC-0125.jpg",
  "https://i.postimg.cc/TwnCcwSZ/DSC-0128.jpg",
  "https://i.postimg.cc/qq0QDrHg/DSC-0127.jpg",
  "https://i.postimg.cc/8PZw4xKP/DSC-0126.jpg",
  "https://i.postimg.cc/0Nwf8j8b/DSC-0701.jpg",
  "https://i.postimg.cc/NjVDqmv3/DSC-0698.jpg",
  "https://i.postimg.cc/qM4ZjspQ/P-20170602-111408.jpg",
  "https://i.postimg.cc/TY0NSKwx/P-20170602-111418.jpg",
  "https://i.postimg.cc/6p1jWFn1/P-20170602-111435.jpg",
  "https://i.postimg.cc/y8Npz7gZ/P-20170602-111447.jpg",
  "https://i.postimg.cc/nLSjXqsK/528-CCD27-3-BB8-43-CF-BD20-2-E843-C7-DDA09.jpg",
  "https://i.postimg.cc/Twyyghmz/6-A72-C282-5241-4-C30-B1-F5-3-B0-D37537-DBE.jpg",
  "https://i.postimg.cc/j2PL39Mv/95-A939-D3-016-B-4-F05-A0-D6-E1-CED7-BC6-D6-C.jpg",
];

function HomePage() {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (src) => {
    setCurrentIndex(images.indexOf(src));
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <Helmet>
        <title>Mabro Tech – Siseviimistlus ja maalritööd Tallinnas</title>
        <meta
          name="description"
          content="Mabro Tech OÜ – Siseviimistlus, maalritööd, vaheseinad, ripplaed, remonditööd. Kvaliteetne ja usaldusväärne teenus Tallinnas ja Harjumaal."
        />
        <link rel="canonical" href="https://mabrotech.ee/" />
        <meta
          property="og:title"
          content="Mabro Tech – Siseviimistlus ja maalritööd"
        />
        <meta
          property="og:description"
          content="Siseviimistlus, maalritööd, vaheseinad, ripplaed, remonditööd. Kvaliteetne ja usaldusväärne teenus."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mabrotech.ee/" />
        <meta property="og:image" content="https://mabrotech.ee/Elutuba.JPG" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://mabrotech.ee/Elutuba.JPG" />
        <meta
          name="twitter:image:alt"
          content="Mabro Tech – siseviimistlus ja maalritööd"
        />
      </Helmet>
      <div className={styles.profileDiv}>
        <div className={styles.profileImgContainer}>
          <img
            alt="Elutuba – siseviimistluse näidisprojekt"
            className={styles.profileImage}
            src="./Elutuba.JPG"
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.projects}>
        <h2 className={styles.projectHeader} id="projects">
          {t("projects_title")}
        </h2>
        <div className={styles.tehtudTööd}>
          {images.map((src, i) => (
            <div className={styles.tehtudTööContainer} key={i}>
              <img
                src={src}
                alt={`Tehtud töö ${i + 1}`}
                loading="lazy"
                onClick={() => handleImageClick(src)}
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br /> <br />
      <div className={styles.contactContainer}>
        <div className={styles.contactMe}>
          <h2>{t("homepage_contact_header")}</h2> <br />
          <Contact />
        </div>
      </div>
      <p className={styles.contactBelowText}>
        {t("homepage_cta")} <br />
        {t("homepage_contact")}
      </p>
      <br />
      <div className={styles.homePageModalContainer}>
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          dialogClassName={styles.customModalWidth}
          contentClassName={styles.modalContent}
        >
          <Modal.Body
            style={{
              padding: 0,
              background: "black",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            <button onClick={handleClose} className={styles.closeButton}>
              ✕
            </button>
            <button
              onClick={handlePrev}
              className={styles.prevButton}
              aria-label="Eelmine pilt"
            >
              &#8592;
            </button>
            <img
              src={images[currentIndex]}
              alt={`Tehtud töö ${currentIndex + 1}`}
              className={styles.modalImage}
            />
            <button
              onClick={handleNext}
              className={styles.nextButton}
              aria-label="Järgmine pilt"
            >
              &#8594;
            </button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default HomePage;
