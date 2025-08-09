import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Footer from "../components/home/Footer";
import { Contact } from "../components/home/Contact";
import styles from "../css/HomePage.module.css";

const images = [
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
];

function HomePage() {
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
      <div className={styles.profileDiv}>
        <br />
        <h1>Üle 15 aasta erialast kogemust</h1>
        <br />
        <div className={styles.profileImgContainer}>
          <img
            alt="pilt suurest toast, kus on suur tuba, suur diivan, suur laud ja suur teler"
            className={styles.profileImage}
            src="./Elutuba.jpg"
          />
        </div>
      </div>
      <div className={styles.projects}>
        <h2 className={styles.projectHeader} id="projects">
          Tehtud tööd
        </h2>
        <div className={styles.tehtudTööd}>
          {images.map((src, i) => (
            <div className={styles.tehtudTööContainer} key={i}>
              <img src={src} alt="" onClick={() => handleImageClick(src)} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br /> <br />
      <div className={styles.contactContainer}>
        <div className={styles.contactMe}>
          <h2 id="contacts">Kirjuta oma plaanist!</h2> <br />
          <Contact />
        </div>
      </div>
      <br />
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName={styles.customModalWidth}
        contentClassName={styles.modalContent}
      >
        <Modal.Body style={{
          padding: 0,
          background: "black",
          borderRadius: "5px",
          position: "relative",
        }}>
          <button
            onClick={handleClose}
            className={styles.closeButton}
          >
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
            alt=""
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
      <Footer />
    </div>
  );
}

export default HomePage;
